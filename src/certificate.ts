import type { Course, Module } from "./course";
import type { Participant } from "./participant";
import { getQuizScore, isLessonComplete, PASS_SCORE } from "./progress";

interface ModuleResult {
  module: Module;
  testLessonId: string | null;
  passed: boolean;
  score: number | undefined;
}

function moduleResults(course: Course): ModuleResult[] {
  return course.modules.map((module) => {
    const testLesson = module.lessons.find((l) => l.quiz);
    if (!testLesson) return { module, testLessonId: null, passed: true, score: undefined };
    const score = getQuizScore(testLesson.id);
    return {
      module,
      testLessonId: testLesson.id,
      passed: isLessonComplete(testLesson.id) && (score ?? 0) >= PASS_SCORE,
      score,
    };
  });
}

export function isCertificateEarned(course: Course): boolean {
  return moduleResults(course).every((r) => r.passed);
}

export function renderCertificateView(course: Course, participant: Participant): string {
  const results = moduleResults(course);
  const passedCount = results.filter((r) => r.passed).length;
  const earned = passedCount === results.length;

  const rows = results
    .map(
      (r) => `
    <tr>
      <td>${escapeHtml(r.module.title)}</td>
      <td>${r.testLessonId ? (r.score !== undefined ? `${r.score}%` : "—") : "n/a"}</td>
      <td>${r.passed ? "✓" : "—"}</td>
    </tr>
  `,
    )
    .join("");

  if (!participant.wantsCertificate) {
    return `
      <article class="certificate-view">
        <h2>Certificate</h2>
        <p>You registered without requesting a certificate. You can still track your progress below —
        if you change your mind, register again from any quiz with the certificate option checked.</p>
        <table class="certificate-progress">
          <thead><tr><th>Module</th><th>Test score</th><th>Passed</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </article>
    `;
  }

  if (!earned) {
    return `
      <article class="certificate-view">
        <h2>Certificate progress</h2>
        <p>${passedCount} / ${results.length} module tests passed (≥ ${PASS_SCORE}%). Complete every module's
        proficiency test to unlock your certificate.</p>
        <table class="certificate-progress">
          <thead><tr><th>Module</th><th>Test score</th><th>Passed</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </article>
    `;
  }

  const today = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  return `
    <article class="certificate-view">
      <div class="certificate-paper">
        <p class="certificate-kicker">Certificate of Completion</p>
        <h2 class="certificate-course">${escapeHtml(course.title)}</h2>
        <p class="certificate-awarded-to">is awarded to</p>
        <p class="certificate-name">${escapeHtml(participant.name)}</p>
        <p class="certificate-detail">for completing all 8 modules of the AGRI-TOUR MOOC, passing every
        module proficiency test with a score of ${PASS_SCORE}% or higher.</p>
        <p class="certificate-date">${today}</p>
      </div>
      <table class="certificate-progress">
        <thead><tr><th>Module</th><th>Test score</th><th>Passed</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button type="button" data-print-certificate class="mark-done">Print certificate</button>
    </article>
  `;
}

function escapeHtml(str: string): string {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
