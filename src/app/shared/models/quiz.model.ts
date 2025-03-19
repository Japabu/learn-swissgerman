export enum QuizType {
  VOCABULARY = 'vocabulary',
  GRAMMAR = 'grammar',
  MIXED = 'mixed',
}

export enum QuizDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  type: QuizType;
  difficulty: QuizDifficulty;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  timeTaken: number;
}

export interface QuizSettings {
  type: QuizType;
  difficulty: QuizDifficulty;
  questionCount: number;
  timeLimit?: number;
}
