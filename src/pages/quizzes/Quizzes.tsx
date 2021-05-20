import "./Quizzes.css";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quizprovider/QuizContextProvider";

export const Quizzes = () => {
  const { state } = useQuiz();
  return (
    <div className="quizzes">
      <Header heading={` ${state.userName}!! WELCOME TO THE QUIZZLE`} />

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
