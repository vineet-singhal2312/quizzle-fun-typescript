import React, { createContext, useContext, useReducer } from "react";
import { InitialState, QuizReducer } from "./QuizReducer";

const QuizContext = createContext<any>(null);

export const QuizContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(QuizReducer, InitialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export function useQuiz() {
  return useContext(QuizContext);
}
