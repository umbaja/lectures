export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  questions: QuizQuestion[];
}

export interface VideoCheckpoint {
  id: string;
  /** Playback position, in seconds, at which the video pauses to ask this question. */
  atSeconds: number;
  question: QuizQuestion;
}

export interface LessonVideo {
  /** The part after "v=" in a youtube.com/watch?v=... URL, or the youtu.be/... slug. */
  youtubeId: string;
  checkpoints?: VideoCheckpoint[];
}

export interface Lesson {
  id: string;
  title: string;
  /** Lesson body as HTML string (keep it simple — no markdown renderer required). */
  content: string;
  video?: LessonVideo;
  quiz?: Quiz;
}

/**
 * Supplementary material formats from the D3.2 Practical Guidelines (Section 2) —
 * everything except the core script/slides, which are the lessons themselves.
 */
export type SupplementaryMaterialType =
  | "case-study"
  | "infographic"
  | "checklist"
  | "worksheet"
  | "fact-sheet"
  | "photo-story"
  | "interview-video"
  | "recommended-links";

export interface SupplementaryMaterial {
  id: string;
  type: SupplementaryMaterialType;
  title: string;
  /** Link to the material once it exists. */
  url?: string;
  /** Short note — e.g. what it will contain, if not produced yet. */
  note?: string;
}

export interface Module {
  id: string;
  title: string;
  /** Partner responsible for the module (D3.2 Section 1/4). */
  owner: string;
  /** ~100-150 word module introduction (D3.2 Section 1). */
  intro: string;
  lessons: Lesson[];
  /** At least 4 items, spanning at least 3 different formats (D3.2 Section 1). */
  supplementaryMaterials: SupplementaryMaterial[];
  /** Reference list / useful links used in the materials (D3.2 Section 1). */
  references: string[];
}

export interface Course {
  title: string;
  description: string;
  modules: Module[];
}

export function allLessons(course: Course): Lesson[] {
  return course.modules.flatMap((m) => m.lessons);
}

export function findLesson(course: Course, lessonId: string): Lesson | undefined {
  return allLessons(course).find((l) => l.id === lessonId);
}
