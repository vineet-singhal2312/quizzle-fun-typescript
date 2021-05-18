import React from "react";
import { useQuiz } from "../../context/QuizContextProvider";
import "./ScoreCard.css";

export const ScoreCard = () => {
  const { state } = useQuiz();
  return (
    <div className="score-card">
      <h1>YOUR FINAL SCORE: {state.score}</h1>
    </div>
  );
};
