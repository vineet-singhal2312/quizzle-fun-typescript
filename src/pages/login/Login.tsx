import { useState } from "react";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import "./Login.css";
import { submitNameHandler, takeUserName } from "./Login.utils";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userInput, setUserInput] = useState("");
  const { dispatch } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-box">
        <h2>Enter Your Name</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              onChange={(e) => takeUserName(e, setUserInput)}
            />
            <label>Username</label>
          </div>

          <button
            className="submit-button"
            disabled={false}
            id="submit-button"
            onClick={() => submitNameHandler(dispatch, userInput, navigate)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
