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
} from "./progress";
import { VideoController } from "./video-player";

const app = document.getElementById("app")!;
const lessons = allLessons(course);
const videoController = new VideoController();

let currentLessonId = lessons[0]?.id ?? "";
let lastQuizResult: { lessonId: string; text: string } | null = null;

function render() {
  videoController.destroy();
  const currentLesson = findLesson(course, currentLessonId);
  app.innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <h1>${escapeHtml(course.title)}</h1>
        <p class="description">${escapeHtml(course.description)}</p>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progressPercent()}%"></div>
        </div>
        <p class="progress-label">${completionCount()} / ${lessons.length} lessons completed</p>
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
        ${currentLesson ? renderLesson(currentLesson, findModule(currentLesson)) : "<p>Select a lesson.</p>"}
      </main>
    </div>
  `;

  app.querySelectorAll<HTMLButtonElement>("[data-lesson-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLessonId = btn.dataset.lessonId!;
      render();
    });
  });

  const markDoneBtn = app.querySelector<HTMLButtonElement>("[data-mark-done]");
  markDoneBtn?.addEventListener("click", () => {
    markLessonComplete(currentLessonId);
    render();
  });

  const quizForm = app.querySelector<HTMLFormElement>("[data-quiz-form]");
  quizForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleQuizSubmit(quizForm, currentLesson!);
  });

  if (currentLesson?.video) {
    void mountLessonVideo(currentLesson);
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
  return `
    <article>
      ${isFirst ? renderModuleIntro(module) : ""}
      <h2>${escapeHtml(lesson.title)}</h2>
      ${lesson.video ? `<div class="video-embed"><div id="yt-player"></div></div>` : ""}
      <div class="lesson-content">${lesson.content}</div>
      ${lesson.quiz ? renderQuiz(lesson) : ""}
      <button data-mark-done class="mark-done">
        ${isLessonComplete(lesson.id) ? "Lesson completed ✓" : "Mark as completed"}
      </button>
      ${isLast ? renderModuleWrapUp(module) : ""}
    </article>
  `;
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
  const body = material.url
    ? `<a href="${escapeAttr(material.url)}" target="_blank" rel="noopener">${escapeHtml(material.title)}</a>`
    : escapeHtml(material.title);
  return `
    <li>
      <span class="material-type">${escapeHtml(label)}</span>
      ${body}
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
  if (score >= 70) markLessonComplete(lesson.id);
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
