import { useQuiz } from "../providers/QuizContextProvider";
import "./QuestionCard.css";

type option = {
  option: String;
  isRight: Boolean;
};

type propType = {
  question: String;
  options: option[];
};
// export const changeQuestion = (dispatch: any) => {
//   // const { state, dispatch } = useQuiz();

//   dispatch({
//     type: "increase-qus-number",
//     payload: 1,
//   });
// };

export const QuestionCard = () => {
  const { state, dispatch } = useQuiz();

  function answerHandler({
    option,
    negativePoint,
    plusPoint,
  }: {
    option: string | undefined;
    negativePoint: number;
    plusPoint: number;
  }) {
    if (option === state.data[state.questionNum]?.rightOption) {
      // console.log("yeahhh");
      dispatch({ type: "increment", negativePoint, plusPoint });
    } else {
      dispatch({ type: "decrement", negativePoint, plusPoint });
    }
    dispatch({
      type: "next-button",
      payload: true,
    });
  }
  // console.log(state.data[state.questionNum]?.question);
  // console.log(state.data[state.questionNum]?.options);

  return (
    <div className="question-card">
      <h3 className="question">{state.data[state.questionNum]?.question}</h3>

      <ol className="options">
        {state.data[state.questionNum]?.options.map((option: any) => {
          // console.log(option);

          return (
            <li
              key={option}
              className={
                option === state.data[state.questionNum]?.rightOption
                  ? `option ${state.clickedRight}`
                  : `option ${state.clickedWrong}`
              }
              onClick={() => {
                answerHandler({
                  option: option,
                  plusPoint: state.data[state.questionNum]?.plusPoint,
                  negativePoint: state.data[state.questionNum]?.negativePoint,
                });

                dispatch({
                  type: "clicked-right",
                  payload: "right",
                });
                dispatch({
                  type: "clicked-wrong",
                  payload: "wrong",
                });
              }}
            >
              {option}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
