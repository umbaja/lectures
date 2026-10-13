import { loadJson, saveJson } from "./storage";

const ANSWERS_KEY = "course-micro-quiz-answers";

export function getMicroQuizAnswer(microQuizId: string): number | undefined {
  const all = loadJson<Record<string, number>>(ANSWERS_KEY, {});
  return all[microQuizId];
}

export function saveMicroQuizAnswer(microQuizId: string, selectedIndex: number) {
  const all = loadJson<Record<string, number>>(ANSWERS_KEY, {});
  all[microQuizId] = selectedIndex;
  saveJson(ANSWERS_KEY, all);
}
