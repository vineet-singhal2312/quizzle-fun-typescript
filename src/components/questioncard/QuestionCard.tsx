import { useQuiz } from "../../context/quizprovider/QuizContextProvider";
import "./QuestionCard.css";

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
      dispatch({ type: "increment", negativePoint, plusPoint });
    } else {
      dispatch({ type: "decrement", negativePoint, plusPoint });
    }
    dispatch({
      type: "next-button",
      payload: true,
    });
  }

  return (
    <div className="question-card">
      <h3 className="question">{state.data[state.questionNum]?.question}</h3>

      <ol className="options">
        {state.data[state.questionNum]?.options.map((option: any) => {
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
