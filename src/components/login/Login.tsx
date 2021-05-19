import { useState } from "react";
import { useQuiz } from "../../context/quizprovider/QuizContextProvider";
import "./Login.css";
import { submitNameHandler, takeUserName } from "./Login.utils";
import { Link } from "react-router-dom";

export const Login = () => {
  const [userInput, setUserInput] = useState("");
  const { dispatch } = useQuiz();

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
          {/* <div className="user-box">
            <input type="password" name="" />
            <label>Password</label>
          </div> */}
          {/* <button className="submit-button" disabled={true}> */}
          <Link
            to="/quizzes"
            id="link"
            // disabled={false}
            onClick={() => submitNameHandler(dispatch, userInput)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
          {/* </button> */}
        </form>
      </div>
    </div>
  );
};
