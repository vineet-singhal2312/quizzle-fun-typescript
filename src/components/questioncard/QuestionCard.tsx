import { useQuiz } from "../../context/quizprovider/QuizContextProvider";
import "./QuestionCard.css";
import { AnswerHandler } from "./QuestionCard.utils";

export const QuestionCard = () => {
  const { state, dispatch } = useQuiz();

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
                AnswerHandler({
                  option: option,
                  plusPoint: state.data[state.questionNum]?.plusPoint,
                  negativePoint: state.data[state.questionNum]?.negativePoint,
                  state,
                  dispatch,
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
