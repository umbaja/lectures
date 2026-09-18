const STORAGE_KEY = "course-progress";

interface ProgressState {
  completedLessons: string[];
  quizScores: Record<string, number>;
  answeredCheckpoints: string[];
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedLessons: [], quizScores: {}, answeredCheckpoints: [] };
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      completedLessons: parsed.completedLessons ?? [],
      quizScores: parsed.quizScores ?? {},
      answeredCheckpoints: parsed.answeredCheckpoints ?? [],
    };
  } catch {
    return { completedLessons: [], quizScores: {}, answeredCheckpoints: [] };
  }
}

function save(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode, disabled storage) — progress just won't persist.
  }
}

export function isLessonComplete(lessonId: string): boolean {
  return load().completedLessons.includes(lessonId);
}

export function markLessonComplete(lessonId: string) {
  const state = load();
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
    save(state);
  }
}

export function recordQuizScore(lessonId: string, score: number) {
  const state = load();
  state.quizScores[lessonId] = score;
  save(state);
}

export function completionCount(): number {
  return load().completedLessons.length;
}

export function isCheckpointAnswered(checkpointId: string): boolean {
  return load().answeredCheckpoints.includes(checkpointId);
}

export function markCheckpointAnswered(checkpointId: string) {
  const state = load();
  if (!state.answeredCheckpoints.includes(checkpointId)) {
    state.answeredCheckpoints.push(checkpointId);
    save(state);
  }
}
