import { course } from "./data/course-content";
import { allLessons, findLesson, type Lesson } from "./course";
import { isLessonComplete, markLessonComplete, recordQuizScore, completionCount } from "./progress";

const app = document.getElementById("app")!;
const lessons = allLessons(course);

let currentLessonId = lessons[0]?.id ?? "";
let lastQuizResult: { lessonId: string; text: string } | null = null;

function render() {
  const currentLesson = findLesson(course, currentLessonId);
  app.innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <h1>${escapeHtml(course.title)}</h1>
        <p class="description">${escapeHtml(course.description)}</p>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${progressPercent()}%"></div>
        </div>
        <p class="progress-label">${completionCount()} / ${lessons.length} lekcií dokončených</p>
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
        ${currentLesson ? renderLesson(currentLesson) : "<p>Vyberte lekciu.</p>"}
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
}

function renderLesson(lesson: Lesson): string {
  return `
    <article>
      <h2>${escapeHtml(lesson.title)}</h2>
      <div class="lesson-content">${lesson.content}</div>
      ${lesson.quiz ? renderQuiz(lesson) : ""}
      <button data-mark-done class="mark-done">
        ${isLessonComplete(lesson.id) ? "Lekcia dokončená ✓" : "Označiť ako dokončenú"}
      </button>
    </article>
  `;
}

function renderQuiz(lesson: Lesson): string {
  const quiz = lesson.quiz!;
  return `
    <form data-quiz-form class="quiz">
      <h3>Kvíz</h3>
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
      <button type="submit">Vyhodnotiť</button>
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
  lastQuizResult = { lessonId: lesson.id, text: `Výsledok: ${correct} / ${quiz.questions.length} (${score} %)` };
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

render();
