import "./Quizzes.css";
import { Header } from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import { useAuth } from "../../context/auth-provider/authContextProvider";
import Fab from "@material-ui/core/Fab";

export const Quizzes = () => {
  const { state } = useQuiz();
  const { userName } = useAuth();
  const navigate = useNavigate();
  const { setLogin, setToken } = useAuth();

  function Logout() {
    localStorage?.removeItem("login");
    setLogin(false);
    setToken(null);
    navigate("/");
  }

  return (
    <div className="quizzes">
      <Header
        heading={` ${userName?.split(" ")[0]}!! WELCOME TO THE QUIZZLE`}
      />

      <Link to="/quizzes/git-quiz" className="quiz-card link">
        <h1 className="quiz-name-heading">Git quiz</h1>
      </Link>
      <Link to="/quizzes/react-quiz" className="quiz-card link">
        <h1 className="quiz-name-heading">React quiz</h1>
      </Link>
      <Link to="/quizzes/node-quiz" className="quiz-card link">
        <h1 className="quiz-name-heading">Node quiz</h1>
      </Link>
      <Fab
        color="secondary"
        id="logout-button"
        aria-label="edit"
        onClick={() => Logout()}
      >
        Log Out
      </Fab>
    </div>
  );
};
