import { Questions } from "../../components/quiz/quizType";

export type ACTIONTYPE =
  | { type: "initialize-user-name"; payload: string }
  | { type: "initialize-quiz" }
  | { type: "increment"; negativePoint: number; plusPoint: number }
  | { type: "decrement"; negativePoint: number; plusPoint: number }
  | { type: "initialize-data"; data: Questions }
  | { type: "increase-qus-number"; payload: number }
  | { type: "next-button"; payload: boolean }
  | { type: "clicked-right"; payload: string }
  | { type: "clicked-wrong"; payload: string };

export type IntState = {
  score: number;
  data: any;
  questionNum: number;
  isNxtBtn: boolean;
  clickedRight: string;
  clickedWrong: string;
  startQuiz: boolean;
  userName: string;
};
