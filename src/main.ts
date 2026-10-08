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
  isCheckpointAnswered,
  recordQuizScore,
  completionCount,
  PASS_SCORE,
} from "./progress";
import { VideoController } from "./video-player";
import { getParticipant, isRegistered, registerParticipant, clearParticipant } from "./participant";
import { syncParticipant, syncProgress, syncCheckpointAnswer, syncVideoWatch } from "./backend";
import { renderCertificateView } from "./certificate";
import { getWorksheetAnswers, getCheckedItems, saveWorksheetAnswer, setChecklistItem } from "./worksheets";
import { logCheckpointAnswer, recordVideoWatch, markVideoWatched, isVideoWatched } from "./video-analytics";
import {
  getSummaryDraft,
  saveSummaryDraft,
  getSummaryFeedback,
  saveSummaryFeedback,
  requestSummaryFeedback,
} from "./ai-summary";

const app = document.getElementById("app")!;
const lessons = allLessons(course);
const videoController = new VideoController();

const CERTIFICATE_VIEW = "certificate";

let currentLessonId: string = lessons[0]?.id ?? "";
let lastQuizResult: { lessonId: string; text: string } | null = null;
let mountedVideoLessonId: string | null = null;
const checkpointAttempts = new Map<string, number>();

/** Persist (and sync, if registered) watch stats for whatever video is currently mounted. */
function flushVideoWatchStats() {
  if (!mountedVideoLessonId) return;
  const lessonId = mountedVideoLessonId;
  mountedVideoLessonId = null;
  const stats = videoController.getWatchStats();
  if (stats.watchedSeconds === 0 && stats.seekCount === 0) return;
  const totals = recordVideoWatch(lessonId, stats);
  const participant = getParticipant();
  if (participant) void syncVideoWatch(participant.email, lessonId, totals);
}

window.addEventListener("beforeunload", flushVideoWatchStats);

function render() {
  flushVideoWatchStats();
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
        <div class="account-status">
          ${
            participant
              ? `
            <p class="account-label">Signed in as <strong>${escapeHtml(participant.name)}</strong></p>
            <button
              class="lesson-link certificate-link ${currentLessonId === CERTIFICATE_VIEW ? "active" : ""}"
              data-view-certificate
            >🎓 My certificate</button>
            <button type="button" class="account-action" data-switch-guest>Switch to guest</button>
          `
              : `
            <p class="account-label">Browsing as a guest</p>
            <button type="button" class="mark-done" data-open-registration>Register as a student</button>
          `
          }
        </div>
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

  app.querySelectorAll<HTMLButtonElement>("[data-open-registration]").forEach((btn) => {
    btn.addEventListener("click", () => showRegistrationModal(() => render()));
  });

  app.querySelector<HTMLButtonElement>("[data-switch-guest]")?.addEventListener("click", () => {
    clearParticipant();
    if (currentLessonId === CERTIFICATE_VIEW) currentLessonId = lessons[0]?.id ?? "";
    render();
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

  app.querySelector<HTMLButtonElement>("[data-ai-summary-submit]")?.addEventListener("click", () => {
    void handleAiSummarySubmit();
  });

  if (currentLesson?.video) {
    void mountLessonVideo(currentLesson);
  }
}

async function handleAiSummarySubmit() {
  const section = app.querySelector<HTMLElement>("[data-ai-summary]");
  if (!section) return;
  const lessonId = section.dataset.aiSummaryLessonId!;
  const lesson = findLesson(course, lessonId);
  const participant = getParticipant();
  if (!lesson?.aiSummaryPrompt || !participant) return;

  const textarea = section.querySelector<HTMLTextAreaElement>("[data-ai-summary-input]")!;
  const submitBtn = section.querySelector<HTMLButtonElement>("[data-ai-summary-submit]")!;
  const statusEl = section.querySelector<HTMLElement>("[data-ai-summary-status]")!;
  const feedbackEl = section.querySelector<HTMLElement>("[data-ai-summary-feedback]")!;

  const summary = textarea.value.trim();
  if (summary.length < 20) {
    statusEl.textContent = "Write a bit more first — at least a couple of sentences.";
    return;
  }

  saveSummaryDraft(lessonId, summary);
  submitBtn.disabled = true;
  statusEl.textContent = "Getting feedback…";
  feedbackEl.textContent = "";

  try {
    const { feedback, passed } = await requestSummaryFeedback({
      lessonId,
      lessonTitle: lesson.title,
      prompt: lesson.aiSummaryPrompt,
      summary,
      email: participant.email,
    });
    saveSummaryFeedback(lessonId, feedback);
    if (passed) {
      completeLesson(lessonId);
      refreshAiSummarySection(lesson);
      refreshLessonCompletionUi(lessonId);
      return;
    }
    feedbackEl.textContent = feedback;
    statusEl.textContent = "Not quite there yet — revise your summary below and try again.";
  } catch (err) {
    statusEl.textContent = "Couldn't get feedback right now — please try again in a moment.";
    console.error("[AGRI-TOUR] AI summary feedback failed:", err);
  } finally {
    submitBtn.disabled = false;
  }
}

/** Swaps the AI summary section's own markup in place (avoids a full render(), which would interrupt a playing video). */
function refreshAiSummarySection(lesson: Lesson) {
  const section = app.querySelector<HTMLElement>("[data-ai-summary]");
  if (!section) return;
  section.outerHTML = renderAiSummarySection(lesson);
  app.querySelector<HTMLButtonElement>("[data-ai-summary-submit]")?.addEventListener("click", () => {
    void handleAiSummarySubmit();
  });
}

/** Updates the sidebar checkmark and overall progress bar without a full render(). */
function refreshLessonCompletionUi(lessonId: string) {
  const checkEl = app.querySelector<HTMLElement>(`[data-lesson-id="${lessonId}"] .check`);
  if (checkEl) checkEl.textContent = isLessonComplete(lessonId) ? "✓" : "○";
  const label = app.querySelector<HTMLElement>(".progress-label");
  if (label) label.textContent = `${completionCount()} / ${lessons.length} lessons completed`;
  const fill = app.querySelector<HTMLElement>(".progress-bar-fill");
  if (fill) fill.style.width = `${progressPercent()}%`;
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
  // For a registered participant, a lesson with an AI summary prompt (and no quiz) is
  // completed only by the AI's verdict — no self-service "Mark as completed" button.
  const aiControlsCompletion = Boolean(lesson.aiSummaryPrompt) && !lesson.quiz && isRegistered();
  return `
    <article>
      ${isFirst ? renderModuleIntro(module) : ""}
      <h2>${escapeHtml(lesson.title)}</h2>
      ${
        lesson.video
          ? `<div class="video-embed"><div id="yt-player"></div></div><div class="video-status" data-video-status>${renderVideoStatus(lesson)}</div>`
          : ""
      }
      <div class="lesson-content">${lesson.content}</div>
      ${
        needsGate
          ? renderRegistrationGate(
              "Test your knowledge",
              "This module's proficiency test is open to registered participants, so we can track pilot results " +
                "and — if you'd like one — issue a certificate once you pass every module. Browsing the lessons and " +
                "materials stays free for everyone.",
              "Register to take the test",
            )
          : aiControlsCompletion
            ? ""
            : `
        ${lesson.quiz ? renderQuiz(lesson) : ""}
        <button data-mark-done class="mark-done">
          ${isLessonComplete(lesson.id) ? "Lesson completed ✓" : "Mark as completed"}
        </button>
      `
      }
      ${lesson.aiSummaryPrompt ? renderAiSummarySection(lesson) : ""}
      ${isLast ? renderModuleWrapUp(module) : ""}
    </article>
  `;
}

function renderRegistrationGate(heading: string, body: string, buttonLabel: string): string {
  return `
    <div class="progress-gate">
      <h3>${escapeHtml(heading)}</h3>
      <p>${escapeHtml(body)}</p>
      <button type="button" data-open-registration class="mark-done">${escapeHtml(buttonLabel)}</button>
    </div>
  `;
}

function renderAiSummarySection(lesson: Lesson): string {
  if (!isRegistered()) {
    return renderRegistrationGate(
      "Write a short summary",
      "Registered participants write a short summary of this lesson; an AI checks it and marks the lesson " +
        "complete once it shows real understanding — you don't mark it yourself.",
      "Register to try it",
    );
  }

  if (isLessonComplete(lesson.id)) {
    const feedback = getSummaryFeedback(lesson.id);
    return `
      <section class="ai-summary ai-summary-done" data-ai-summary data-ai-summary-lesson-id="${escapeAttr(lesson.id)}">
        <h3>✓ Lesson completed</h3>
        <p class="ai-summary-prompt">The AI reviewed your summary and marked this lesson complete — nice work.</p>
        ${feedback ? `<div class="ai-summary-feedback">${escapeHtml(feedback)}</div>` : ""}
      </section>
    `;
  }

  const saved = getSummaryDraft(lesson.id);
  return `
    <section class="ai-summary" data-ai-summary data-ai-summary-lesson-id="${escapeAttr(lesson.id)}">
      <h3>Write a short summary</h3>
      <p class="ai-summary-prompt">${escapeHtml(lesson.aiSummaryPrompt!)}</p>
      <p class="ai-summary-note">An AI reviews your summary and marks this lesson complete once it shows real
      understanding — there's no "mark as completed" button here.</p>
      <textarea data-ai-summary-input rows="6" placeholder="Write your summary here…">${escapeHtml(saved)}</textarea>
      <div class="ai-summary-actions">
        <button type="button" data-ai-summary-submit class="mark-done">Submit for AI review</button>
        <span class="ai-summary-status" data-ai-summary-status></span>
      </div>
      <div class="ai-summary-feedback" data-ai-summary-feedback></div>
    </section>
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
  mountedVideoLessonId = lesson.id;
  await videoController.mount(
    "yt-player",
    lesson.video.youtubeId,
    lesson.video.checkpoints ?? [],
    (checkpoint) => showCheckpointOverlay(checkpoint, lesson.id),
    () => handleVideoEnded(lesson),
  );
}

function handleVideoEnded(lesson: Lesson) {
  markVideoWatched(lesson.id);
  const participant = getParticipant();
  if (participant) {
    void syncVideoWatch(participant.email, lesson.id, { ...videoController.getWatchStats(), watched: true });
  }
  refreshVideoStatus(lesson);
}

function renderVideoStatus(lesson: Lesson): string {
  const checkpoints = lesson.video?.checkpoints ?? [];
  const answered = checkpoints.filter((cp) => isCheckpointAnswered(cp.id)).length;
  const watched = isVideoWatched(lesson.id);
  return `
    ${checkpoints.length > 0 ? `<span>${answered} / ${checkpoints.length} questions answered</span>` : ""}
    <span class="${watched ? "watched" : ""}">${watched ? "✓ Watched to the end" : "Not yet watched to the end"}</span>
  `;
}

function refreshVideoStatus(lesson: Lesson) {
  const el = document.querySelector<HTMLElement>("[data-video-status]");
  if (el) el.innerHTML = renderVideoStatus(lesson);
}

function showCheckpointOverlay(checkpoint: VideoCheckpoint, lessonId: string) {
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

  let onContinue = () => videoController.resume();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const answer = new FormData(form).get("answer");
    const correct = answer !== null && Number(answer) === checkpoint.question.correctIndex;

    const attempt = (checkpointAttempts.get(checkpoint.id) ?? 0) + 1;
    checkpointAttempts.set(checkpoint.id, attempt);
    const answerEntry = {
      lessonId,
      checkpointId: checkpoint.id,
      selectedIndex: answer !== null ? Number(answer) : -1,
      correct,
      attempt,
      answeredAt: new Date().toISOString(),
    };
    logCheckpointAnswer(answerEntry);
    const participant = getParticipant();
    if (participant) void syncCheckpointAnswer(participant.email, answerEntry);

    const correctAnswerHtml = `<span class="checkpoint-correct-answer">Correct answer: ${escapeHtml(
      checkpoint.question.options[checkpoint.question.correctIndex],
    )}</span>`;

    if (correct) {
      feedback.innerHTML = `Correct!<br />${correctAnswerHtml}`;
      feedback.classList.add("correct");
      videoController.markAnswered(checkpoint.id);
      markCheckpointAnswered(checkpoint.id);
      continueBtn.textContent = "Resume video";
      onContinue = () => videoController.resume();
      refreshVideoStatus(findLesson(course, lessonId)!);
    } else if (isRegistered()) {
      feedback.innerHTML = `Not quite — we'll rewind so you can find the answer, then you can try again.<br />${correctAnswerHtml}`;
      feedback.classList.add("incorrect");
      continueBtn.textContent = "Rewatch this part";
      onContinue = () => videoController.rewindAndResume(checkpoint.rewindToSeconds ?? 0);
    } else {
      feedback.innerHTML = `Not quite, but let's move on.<br />${correctAnswerHtml}`;
      feedback.classList.add("incorrect");
      videoController.markAnswered(checkpoint.id);
      markCheckpointAnswered(checkpoint.id);
      continueBtn.textContent = "Resume video";
      onContinue = () => videoController.resume();
      refreshVideoStatus(findLesson(course, lessonId)!);
    }

    submitBtn.classList.add("hidden");
    continueBtn.classList.remove("hidden");
    form.querySelectorAll("input").forEach((input) => {
      (input as HTMLInputElement).disabled = true;
    });
  });

  continueBtn.addEventListener("click", () => {
    overlay.remove();
    onContinue();
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
