import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import "./ScoreCard.css";

export const ScoreCard = () => {
  const { state } = useQuiz();
  return (
    <div className="score-card">
      <h1>
        {state.userName.toUpperCase()} YOUR FINAL SCORE IS: {state.score}
      </h1>
    </div>
  );
};
