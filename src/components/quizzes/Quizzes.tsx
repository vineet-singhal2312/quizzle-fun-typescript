import "./Quizzes.css";
import React from "react";
import { Header } from "../header/Header";
import { Link } from "react-router-dom";

export const Quizzes = () => {
  return (
    <div className="quizzes">
      <Header heading="WELCOME TO THE QUIZZLE" />

      <Link to="/quizzes/cliquiz" className="quiz-card">
        <div></div>
      </Link>
      <Link to="/quizzes/cliquiz" className="quiz-card">
        <div></div>
      </Link>
      <Link to="/quizzes/cliquiz" className="quiz-card">
        <div></div>
      </Link>
      <Link to="/quizzes/cliquiz" className="quiz-card">
        <div></div>
      </Link>
    </div>
  );
};
