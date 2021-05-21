import { Questions } from "../../pages/quiz/quizType";

export type QUIZ_ACTION =
  | { type: "initialize-user-name"; payload: string }
  | { type: "initialize-quiz" }
  | { type: "increment"; negativePoint: number; plusPoint: number }
  | { type: "decrement"; negativePoint: number; plusPoint: number }
  | { type: "initialize-data"; data: Questions }
  | { type: "increase-qus-number"; payload: number }
  | { type: "next-button"; payload: boolean }
  | { type: "clicked-right"; payload: string }
  | { type: "clicked-wrong"; payload: string }
  | {
      type: "next-question";
      payload1: boolean;
      payload2: string;
      payload3: number;
    };

export type INITIAL_STATE = {
  score: number;
  data: any;
  questionNum: number;
  isNxtBtn: boolean;
  clickedRight: string;
  clickedWrong: string;
  startQuiz: boolean;
  userName: string;
};
