import { loadJson, saveJson } from "./storage";

const ANSWERS_KEY = "course-worksheet-answers";
const CHECKLIST_KEY = "course-checklist-items";

export function getWorksheetAnswers(worksheetId: string): string[] {
  const all = loadJson<Record<string, string[]>>(ANSWERS_KEY, {});
  return all[worksheetId] ?? [];
}

export function saveWorksheetAnswer(worksheetId: string, fieldIndex: number, value: string) {
  const all = loadJson<Record<string, string[]>>(ANSWERS_KEY, {});
  const answers = all[worksheetId] ?? [];
  answers[fieldIndex] = value;
  all[worksheetId] = answers;
  saveJson(ANSWERS_KEY, all);
}

export function getCheckedItems(checklistId: string): number[] {
  const all = loadJson<Record<string, number[]>>(CHECKLIST_KEY, {});
  return all[checklistId] ?? [];
}

export function setChecklistItem(checklistId: string, itemIndex: number, done: boolean) {
  const all = loadJson<Record<string, number[]>>(CHECKLIST_KEY, {});
  const items = new Set(all[checklistId] ?? []);
  if (done) items.add(itemIndex);
  else items.delete(itemIndex);
  all[checklistId] = Array.from(items);
  saveJson(CHECKLIST_KEY, all);
}
