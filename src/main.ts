import { course } from "./data/course-content";
import {
  allLessons,
  findLesson,
  type Lesson,
  type Module,
  type SupplementaryMaterial,
  type SupplementaryMaterialType,
  type VideoCheckpoint,
} from "./course";
import {
  isLessonComplete,
  markLessonComplete,
  markCheckpointAnswered,
  recordQuizScore,
  completionCount,
  PASS_SCORE,
} from "./progress";
import { VideoController } from "./video-player";
import { getParticipant, isRegistered, registerParticipant } from "./participant";
import { syncParticipant, syncProgress } from "./backend";
import { renderCertificateView } from "./certificate";
import { getWorksheetAnswers, getCheckedItems, saveWorksheetAnswer, setChecklistItem } from "./worksheets";

const app = document.getElementById("app")!;
const lessons = allLessons(course);
const videoController = new VideoController();

const CERTIFICATE_VIEW = "certificate";

let currentLessonId: string = lessons[0]?.id ?? "";
let lastQuizResult: { lessonId: string; text: string } | null = null;

function render() {
  videoController.destroy();
  const participant = getParticipant();
  const currentLesson = currentLessonId === CERTIFICATE_VIEW ? undefined : findLesson(course, currentLessonId);
  app.innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <h1>${escapeHtml(course.title)}</h1>
        <p class="description">${escapeHtml(course.description)}</p>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progressPercent()}%"></div>
        </div>
        <p class="progress-label">${completionCount()} / ${lessons.length} lessons completed</p>
        ${
          participant
            ? `<button
                 class="lesson-link certificate-link ${currentLessonId === CERTIFICATE_VIEW ? "active" : ""}"
                 data-view-certificate
               >🎓 My certificate</button>`
            : ""
        }
        <nav>
          ${course.modules
            .map(
              (m) => `
            <div class="module">
              <h2>${escapeHtml(m.title)}</h2>
              <ul>
                ${m.lessons
                  .map(
                    (l) => `
                  <li>
                    <button
                      class="lesson-link ${l.id === currentLessonId ? "active" : ""}"
                      data-lesson-id="${l.id}"
                    >
                      <span class="check">${isLessonComplete(l.id) ? "✓" : "○"}</span>
                      ${escapeHtml(l.title)}
                    </button>
                  </li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
          `,
            )
            .join("")}
        </nav>
      </aside>
      <main class="content">
        ${
          currentLessonId === CERTIFICATE_VIEW
            ? participant
              ? renderCertificateView(course, participant)
              : "<p>Register from a module test to track certificate progress.</p>"
            : currentLesson
              ? renderLesson(currentLesson, findModule(currentLesson))
              : "<p>Select a lesson.</p>"
        }
      </main>
    </div>
  `;

  app.querySelectorAll<HTMLButtonElement>("[data-lesson-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLessonId = btn.dataset.lessonId!;
      render();
    });
  });

  app.querySelector<HTMLButtonElement>("[data-view-certificate]")?.addEventListener("click", () => {
    currentLessonId = CERTIFICATE_VIEW;
    render();
  });

  app.querySelector<HTMLButtonElement>("[data-print-certificate]")?.addEventListener("click", () => {
    window.print();
  });

  const markDoneBtn = app.querySelector<HTMLButtonElement>("[data-mark-done]");
  markDoneBtn?.addEventListener("click", () => {
    completeLesson(currentLessonId);
    render();
  });

  const quizForm = app.querySelector<HTMLFormElement>("[data-quiz-form]");
  quizForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleQuizSubmit(quizForm, currentLesson!);
  });

  const registrationBtn = app.querySelector<HTMLButtonElement>("[data-open-registration]");
  registrationBtn?.addEventListener("click", () => {
    showRegistrationModal(() => render());
  });

  app.querySelectorAll<HTMLTextAreaElement>(".worksheet-form textarea").forEach((textarea) => {
    textarea.addEventListener("blur", () => {
      const form = textarea.closest<HTMLFormElement>("[data-worksheet-id]")!;
      saveWorksheetAnswer(form.dataset.worksheetId!, Number(textarea.dataset.fieldIndex), textarea.value);
    });
  });

  app.querySelectorAll<HTMLButtonElement>("[data-download-worksheet]").forEach((btn) => {
    btn.addEventListener("click", () => downloadWorksheet(btn.dataset.worksheetId!, btn.dataset.worksheetTitle!));
  });

  app.querySelectorAll<HTMLInputElement>("[data-checklist-id]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      setChecklistItem(checkbox.dataset.checklistId!, Number(checkbox.dataset.itemIndex), checkbox.checked);
    });
  });

  if (currentLesson?.video) {
    void mountLessonVideo(currentLesson);
  }
}

function downloadWorksheet(worksheetId: string, title: string) {
  const form = app.querySelector<HTMLFormElement>(`[data-worksheet-id="${worksheetId}"]`)!;
  const lines = [title, ""];
  form.querySelectorAll<HTMLLabelElement>(".worksheet-field").forEach((label) => {
    const prompt = label.childNodes[0]?.textContent?.trim() ?? "";
    const answer = label.querySelector("textarea")!.value.trim();
    lines.push(prompt, answer || "(not answered)", "");
  });
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function completeLesson(lessonId: string) {
  markLessonComplete(lessonId);
  const participant = getParticipant();
  if (participant) {
    void syncProgress(participant.email, lessonId, { completed: true });
  }
}

function findModule(lesson: Lesson): Module {
  const module = course.modules.find((m) => m.lessons.some((l) => l.id === lesson.id));
  if (!module) throw new Error(`No module contains lesson ${lesson.id}`);
  return module;
}

function renderLesson(lesson: Lesson, module: Module): string {
  const isFirst = module.lessons[0]?.id === lesson.id;
  const isLast = module.lessons[module.lessons.length - 1]?.id === lesson.id;
  const needsGate = Boolean(lesson.quiz) && !isRegistered();
  return `
    <article>
      ${isFirst ? renderModuleIntro(module) : ""}
      <h2>${escapeHtml(lesson.title)}</h2>
      ${lesson.video ? `<div class="video-embed"><div id="yt-player"></div></div>` : ""}
      <div class="lesson-content">${lesson.content}</div>
      ${
        needsGate
          ? renderRegistrationGate()
          : `
        ${lesson.quiz ? renderQuiz(lesson) : ""}
        <button data-mark-done class="mark-done">
          ${isLessonComplete(lesson.id) ? "Lesson completed ✓" : "Mark as completed"}
        </button>
      `
      }
      ${isLast ? renderModuleWrapUp(module) : ""}
    </article>
  `;
}

function renderRegistrationGate(): string {
  return `
    <div class="progress-gate">
      <h3>Test your knowledge</h3>
      <p>This module's proficiency test is open to registered participants, so we can track pilot results
      and — if you'd like one — issue a certificate once you pass every module. Browsing the lessons and
      materials stays free for everyone.</p>
      <button type="button" data-open-registration class="mark-done">Register to take the test</button>
    </div>
  `;
}

function showRegistrationModal(onDone: () => void) {
  const overlay = document.createElement("div");
  overlay.className = "checkpoint-overlay";
  overlay.innerHTML = `
    <div class="checkpoint-modal">
      <h3>Register for module tests</h3>
      <form data-registration-form>
        <label class="registration-field">
          Name
          <input type="text" name="name" required />
        </label>
        <label class="registration-field">
          Email
          <input type="email" name="email" required />
        </label>
        <label class="registration-checkbox">
          <input type="checkbox" name="wantsCertificate" />
          I'd like a certificate once I pass every module's test
        </label>
        <label class="registration-checkbox">
          <input type="checkbox" name="consent" required />
          I agree that my name, email and course progress are stored for AGRI-TOUR project reporting
        </label>
        <div class="checkpoint-actions">
          <button type="submit">Register</button>
          <button type="button" data-cancel-registration class="secondary">Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  const form = overlay.querySelector<HTMLFormElement>("[data-registration-form]")!;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const participant = registerParticipant({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      wantsCertificate: data.get("wantsCertificate") !== null,
    });
    void syncParticipant(participant);
    overlay.remove();
    onDone();
  });

  overlay.querySelector<HTMLButtonElement>("[data-cancel-registration]")?.addEventListener("click", () => {
    overlay.remove();
  });
}

function renderModuleIntro(module: Module): string {
  return `
    <div class="module-intro">
      <p class="module-owner">Lead partner: ${escapeHtml(module.owner)}</p>
      <p>${escapeHtml(module.intro)}</p>
    </div>
  `;
}

const MATERIAL_TYPE_LABELS: Record<SupplementaryMaterialType, string> = {
  "case-study": "Case study",
  infographic: "Infographic",
  checklist: "Checklist",
  worksheet: "Worksheet",
  "fact-sheet": "Fact sheet / glossary",
  "photo-story": "Photo story",
  "interview-video": "Interview / field video",
  "recommended-links": "Recommended links",
};

function renderMaterial(material: SupplementaryMaterial): string {
  const label = MATERIAL_TYPE_LABELS[material.type];
  const summary = `<span class="material-type">${escapeHtml(label)}</span> ${escapeHtml(material.title)}`;

  if (material.worksheetFields) {
    const answers = getWorksheetAnswers(material.id);
    return `
      <li>
        <details class="material-expandable">
          <summary>${summary}</summary>
          <form class="worksheet-form" data-worksheet-id="${escapeAttr(material.id)}">
            ${material.worksheetFields
              .map(
                (field, i) => `
              <label class="worksheet-field">
                ${escapeHtml(field)}
                <textarea data-field-index="${i}" rows="2">${escapeHtml(answers[i] ?? "")}</textarea>
              </label>
            `,
              )
              .join("")}
            <button
              type="button"
              class="mark-done"
              data-download-worksheet
              data-worksheet-id="${escapeAttr(material.id)}"
              data-worksheet-title="${escapeAttr(material.title)}"
            >Download my answers</button>
          </form>
        </details>
      </li>
    `;
  }

  if (material.checklistItems) {
    const checked = getCheckedItems(material.id);
    return `
      <li>
        <details class="material-expandable">
          <summary>${summary}</summary>
          <ul class="checklist">
            ${material.checklistItems
              .map(
                (item, i) => `
              <li>
                <label>
                  <input
                    type="checkbox"
                    data-checklist-id="${escapeAttr(material.id)}"
                    data-item-index="${i}"
                    ${checked.includes(i) ? "checked" : ""}
                  />
                  ${escapeHtml(item)}
                </label>
              </li>
            `,
              )
              .join("")}
          </ul>
        </details>
      </li>
    `;
  }

  if (material.body) {
    return `
      <li>
        <details class="material-expandable">
          <summary>${summary}</summary>
          <div class="material-body">${material.body}</div>
        </details>
      </li>
    `;
  }

  const titleHtml = material.url
    ? `<a href="${escapeAttr(material.url)}" target="_blank" rel="noopener">${escapeHtml(material.title)}</a>`
    : escapeHtml(material.title);
  return `
    <li>
      <span class="material-type">${escapeHtml(label)}</span>
      ${titleHtml}
      ${material.note ? `<span class="material-note"> — ${escapeHtml(material.note)}</span>` : ""}
    </li>
  `;
}

function renderModuleWrapUp(module: Module): string {
  if (module.supplementaryMaterials.length === 0 && module.references.length === 0) return "";
  return `
    <section class="module-wrapup">
      ${
        module.supplementaryMaterials.length > 0
          ? `
        <h3>Supplementary materials</h3>
        <ul class="materials-list">${module.supplementaryMaterials.map(renderMaterial).join("")}</ul>
      `
          : ""
      }
      ${
        module.references.length > 0
          ? `
        <h3>References</h3>
        <ul class="references-list">${module.references.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
      `
          : ""
      }
    </section>
  `;
}

async function mountLessonVideo(lesson: Lesson) {
  if (!lesson.video) return;
  await videoController.mount("yt-player", lesson.video.youtubeId, lesson.video.checkpoints ?? [], showCheckpointOverlay);
}

function showCheckpointOverlay(checkpoint: VideoCheckpoint) {
  const overlay = document.createElement("div");
  overlay.className = "checkpoint-overlay";
  overlay.innerHTML = `
    <div class="checkpoint-modal">
      <h3>Question</h3>
      <form data-checkpoint-form>
        <fieldset>
          <legend>${escapeHtml(checkpoint.question.question)}</legend>
          ${checkpoint.question.options
            .map(
              (opt, oi) => `
            <label>
              <input type="radio" name="answer" value="${oi}" required />
              ${escapeHtml(opt)}
            </label>
          `,
            )
            .join("")}
        </fieldset>
        <p class="checkpoint-feedback" data-checkpoint-feedback></p>
        <div class="checkpoint-actions">
          <button type="submit" data-checkpoint-submit>Answer</button>
          <button type="button" data-checkpoint-continue class="hidden">Resume video</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  const form = overlay.querySelector<HTMLFormElement>("[data-checkpoint-form]")!;
  const submitBtn = overlay.querySelector<HTMLButtonElement>("[data-checkpoint-submit]")!;
  const continueBtn = overlay.querySelector<HTMLButtonElement>("[data-checkpoint-continue]")!;
  const feedback = overlay.querySelector<HTMLElement>("[data-checkpoint-feedback]")!;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const answer = new FormData(form).get("answer");
    const correct = answer !== null && Number(answer) === checkpoint.question.correctIndex;
    feedback.textContent = correct ? "Correct!" : "Not quite, but let's move on.";
    feedback.classList.add(correct ? "correct" : "incorrect");
    submitBtn.classList.add("hidden");
    continueBtn.classList.remove("hidden");
    form.querySelectorAll("input").forEach((input) => {
      (input as HTMLInputElement).disabled = true;
    });
  });

  continueBtn.addEventListener("click", () => {
    markCheckpointAnswered(checkpoint.id);
    overlay.remove();
    videoController.resume();
  });
}

function renderQuiz(lesson: Lesson): string {
  const quiz = lesson.quiz!;
  return `
    <form data-quiz-form class="quiz">
      <h3>Quiz</h3>
      ${quiz.questions
        .map(
          (q, qi) => `
        <fieldset>
          <legend>${escapeHtml(q.question)}</legend>
          ${q.options
            .map(
              (opt, oi) => `
            <label>
              <input type="radio" name="q${qi}" value="${oi}" required />
              ${escapeHtml(opt)}
            </label>
          `,
            )
            .join("")}
        </fieldset>
      `,
        )
        .join("")}
      <button type="submit">Submit</button>
      <p class="quiz-result" data-quiz-result>${
        lastQuizResult && lastQuizResult.lessonId === lesson.id ? escapeHtml(lastQuizResult.text) : ""
      }</p>
    </form>
  `;
}

function handleQuizSubmit(form: HTMLFormElement, lesson: Lesson) {
  const quiz = lesson.quiz!;
  const formData = new FormData(form);
  let correct = 0;
  quiz.questions.forEach((q, qi) => {
    const answer = formData.get(`q${qi}`);
    if (answer !== null && Number(answer) === q.correctIndex) correct += 1;
  });
  const score = Math.round((correct / quiz.questions.length) * 100);
  recordQuizScore(lesson.id, score);
  lastQuizResult = { lessonId: lesson.id, text: `Score: ${correct} / ${quiz.questions.length} (${score}%)` };
  const passed = score >= PASS_SCORE;
  if (passed) markLessonComplete(lesson.id);
  const participant = getParticipant();
  if (participant) {
    void syncProgress(participant.email, lesson.id, { completed: passed, quizScore: score });
  }
  render();
}

function progressPercent(): number {
  if (lessons.length === 0) return 0;
  return Math.round((completionCount() / lessons.length) * 100);
}

function escapeHtml(str: string): string {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str: string): string {
  return escapeHtml(str).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

render();
