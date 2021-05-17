import "./Quizzes.css";
import React from "react";
import { Header } from "../header/Header";
import { Link } from "react-router-dom";

export const Quizzes = () => {
  return (
    <div className="quizzes">
      <Header heading="WELCOME TO THE QUIZZLE" />

      <Link to="/quizzes/git-quiz" className="quiz-card link">
        <h1 className="quiz-name-heading">Git quiz</h1>
      </Link>
      <Link to="/quizzes/react-quiz" className="quiz-card link">
        <h1 className="quiz-name-heading">React quiz</h1>
      </Link>
      <Link to="/quizzes/node-quiz" className="quiz-card link">
        <h1 className="quiz-name-heading">Node quiz</h1>
      </Link>
      <Link to="/quizzes/cliquiz" className="quiz-card link">
        <h1 className="quiz-name-heading">Git quiz</h1>
      </Link>
    </div>
  );
};
