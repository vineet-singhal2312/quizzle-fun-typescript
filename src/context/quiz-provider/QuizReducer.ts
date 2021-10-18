import { QUIZ_ACTION, INITIAL_STATE } from "./QuizReducer.type";

export const InitialState: INITIAL_STATE = {
  score: 0,
  data: [],
  questionNum: 0,
  isNxtBtn: false,
  clickedRight: "",
  clickedWrong: "",
  startQuiz: false,
  userName: "",
};

export const QuizReducer = (
  state: typeof InitialState,
  action: QUIZ_ACTION
) => {
  switch (action.type) {
    case "initialize-user-name":
      return { ...state, userName: action.payload };
    case "initialize-quiz":
      return {
        ...state,
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

 
    case "clicked-right":
      return { ...state, clickedRight: action.payload };

    case "clicked-wrong":
      return { ...state, clickedWrong: action.payload };
    case "next-question":
      return {
        ...state,
        clickedWrong: action.payload2,
        clickedRight: action.payload2,
        isNxtBtn: action.payload1,
        questionNum: state.questionNum + action.payload3,
      };
    default:
      throw new Error();
  }
};
