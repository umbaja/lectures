export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  questions: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  /** Lesson body as HTML string (keep it simple — no markdown renderer required). */
  content: string;
  quiz?: Quiz;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
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
