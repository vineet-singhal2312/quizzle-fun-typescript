import { INITIAL_STATE } from "../../context/quizprovider/QuizReducer.type";

export function AnswerHandler({
  option,
  negativePoint,
  plusPoint,
  state,
  dispatch,
}: {
  option: string | undefined;
  negativePoint: number;
  plusPoint: number;
  state: INITIAL_STATE;
  dispatch: any;
}) {
  if (option === state.data[state.questionNum]?.rightOption) {
    dispatch({ type: "increment", negativePoint, plusPoint });
  } else {
    dispatch({ type: "decrement", negativePoint, plusPoint });
  }
  dispatch({
    type: "next-button",
    payload: true,
  });
}
