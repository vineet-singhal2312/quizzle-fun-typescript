import "./Quiz.css";
import { QuestionCard } from "../../components/questioncard/QuestionCard";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import { ScoreCard } from "../../components/scorecard/ScoreCard";
import { useParams } from "react-router";
import { Header } from "../../components/header/Header";
import { Timer } from "../../components/timer/Timer";

import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Instructions from "../../components/instructions/Instructions";
import {
  INITIAL_STATE,
  QUIZ_ACTION,
} from "../../context/quiz-provider/QuizReducer.type";
import { StartQuiz } from "./Quiz.utils";
import { useAuth } from "../../context/auth-provider/authContextProvider";

export function Quiz() {
  useEffect((): any => {
    dispatch({ type: "initialize-quiz" });
  }, []);

  const { quizName } = useParams();
  const [isLoader, setIsLoader] = useState<boolean>(false);

  const { state, dispatch } = useQuiz();
  const { token } = useAuth();

  return (
    <div className="quiz">
      {state.startQuiz === false && (
        <Header heading="READ THE INSTRUCTIONS BELOW!!" />
      )}
      {state.startQuiz && state.questionNum < 10 && <Timer />}

      {state.startQuiz ? (
        state.questionNum < 10 ? (
          <Header heading={`${state.userName}!! LET'S PLAY`} />
        ) : (
          <Header heading="GAME OVER" />
        )
      ) : (
        <Button
          id="button"
          onClick={() =>
            StartQuiz({
              setIsLoader,
              quizName,
              dispatch,
              token,
            })
          }
        >
          Start
        </Button>
      )}

      <div className="question-card-div">
        {state.startQuiz &&
          (state.questionNum < 10 ? <QuestionCard /> : <ScoreCard />)}
      </div>
      {state.startQuiz === false && <Instructions />}

      <div className="next-btn-div">
        {state.isNxtBtn &&
          (state.questionNum < 9 ? (
            <Button
              id="button"
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({
                  type: "next-question",
                  payload1: false,
                  payload2: "",
                  payload3: 1,
                });
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              id="button"
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({
                  type: "next-question",
                  payload1: false,
                  payload2: "",
                  payload3: 1,
                });
              }}
            >
              Done
            </Button>
          ))}

        {state.startQuiz && !state.isNxtBtn && state.questionNum < 10 && (
          <Button
            id="button"
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch({
                type: "next-question",
                payload1: false,
                payload2: "",
                payload3: 1,
              });
            }}
          >
            Pass
          </Button>
        )}
      </div>
      {isLoader && <CircularProgress id="loader" />}

      <Link to="/quizzes" className="link">
        <Fab color="secondary" id="home-button" aria-label="edit">
          HOME
        </Fab>
      </Link>
    </div>
  );
}
