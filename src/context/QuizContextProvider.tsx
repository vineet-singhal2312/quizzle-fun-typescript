import React, { createContext, useContext, useReducer } from "react";
import { Questions } from "../components/quiz/quizType";

const QuizContext = createContext<any>(null);
export type intState = {
  score: number;
  data: any;
  questionNum: number;
  isNxtBtn: boolean;
  clickedRight: string;
  clickedWrong: string;
  startQuiz: boolean;
};

const initialState: intState = {
  score: 0,
  data: [],
  questionNum: 0,
  isNxtBtn: false,
  clickedRight: "",
  clickedWrong: "",
  startQuiz: false,
};

type ACTIONTYPE =
  | { type: "initialize-quiz" }
  | { type: "increment"; negativePoint: number; plusPoint: number }
  | { type: "decrement"; negativePoint: number; plusPoint: number }
  | { type: "initialize-data"; data: Questions }
  | { type: "increase-qus-number"; payload: number }
  | { type: "next-button"; payload: boolean }
  | { type: "clicked-right"; payload: string }
  | { type: "clicked-wrong"; payload: string };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "initialize-quiz":
      return {
        score: 0,
        data: [],
        questionNum: 0,
        isNxtBtn: false,
        clickedRight: "",
        clickedWrong: "",
        startQuiz: false,
      };
    case "increment":
      return { ...state, score: state.score + action.plusPoint };

    case "decrement":
      return { ...state, score: state.score - action.negativePoint };

    case "initialize-data":
      return { ...state, data: action.data, startQuiz: true };
    case "next-button":
      return { ...state, isNxtBtn: action.payload };

    case "increase-qus-number":
      return { ...state, questionNum: state.questionNum + action.payload };
    case "clicked-right":
      return { ...state, clickedRight: action.payload };

    case "clicked-wrong":
      return { ...state, clickedWrong: action.payload };
    default:
      throw new Error();
  }
};

export const QuizContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export function useQuiz() {
  return useContext(QuizContext);
}
