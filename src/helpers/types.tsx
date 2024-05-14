export interface IQuizQuestion {
  question: string;
  answers: IAnswer[];
}

export interface IAnswer {
  text: string;
  isCorrect: boolean;
}

export type QuizHeaderType = {
  currentQuestionNumber: number;
  totalQuestions: number;
};

export enum QuestionStatus {
  noAnswer = "noAnswer",
  correct = "correct",
  wrong = "wrong",
}

export interface IQuizQuestionStatus {
  status: QuestionStatus;
}

export type QuizMainCardTypes = {
  question: IQuizQuestion;
  handleAnswer: (isCorrectAnswer: boolean) => void;
  nextQuestionLauncher: () => void;
  isNextQuestionButtonActive: boolean;
};

export type NextQuestionButtonProps = Pick<
  QuizMainCardTypes,
  "nextQuestionLauncher" | "isNextQuestionButtonActive"
>;

export type AnswerStatusDisplayProps = {
  quizStatus: Record<number, IQuizQuestionStatus>;
};
