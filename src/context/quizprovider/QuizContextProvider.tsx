import React, { createContext, useContext, useReducer } from "react";
import { InitialState, QuizReducer } from "./QuizReducer";
// import { Questions } from "../../components/quiz/quizType";
import { ACTIONTYPE, IntState } from "./QuizReducer.type";

const QuizContext = createContext<any>(null);

// const initialState: IntState = {
//   score: 0,
//   data: [],
//   questionNum: 0,
//   isNxtBtn: false,
//   clickedRight: "",
//   clickedWrong: "",
//   startQuiz: false,
//   userName: "",
// };

// const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
//   switch (action.type) {
//     case "initialize-user-name":
//       return { ...state, userName: action.payload };
//     case "initialize-quiz":
//       return {
//         ...state,
//         score: 0,
//         data: [],
//         questionNum: 0,
//         isNxtBtn: false,
//         clickedRight: "",
//         clickedWrong: "",
//         startQuiz: false,
//       };
//     case "increment":
//       return { ...state, score: state.score + action.plusPoint };

//     case "decrement":
//       return { ...state, score: state.score - action.negativePoint };

//     case "initialize-data":
//       return { ...state, data: action.data, startQuiz: true };
//     case "next-button":
//       return { ...state, isNxtBtn: action.payload };

//     case "increase-qus-number":
//       return { ...state, questionNum: state.questionNum + action.payload };
//     case "clicked-right":
//       return { ...state, clickedRight: action.payload };

//     case "clicked-wrong":
//       return { ...state, clickedWrong: action.payload };
//     default:
//       throw new Error();
//   }
// };

export const QuizContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(QuizReducer, InitialState);
  console.log(state);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export function useQuiz() {
  return useContext(QuizContext);
}
