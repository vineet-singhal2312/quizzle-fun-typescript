import "./Quiz.css";
import { QuestionCard } from "../../components/questioncard/QuestionCard";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useQuiz } from "../../context/quizprovider/QuizContextProvider";
import { ScoreCard } from "../../components/scorecard/ScoreCard";
import { useParams } from "react-router";
import { Header } from "../../components/header/Header";
import { Timer } from "../../components/timer/Timer";

import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import { Questions } from "./quizType";
import CircularProgress from "@material-ui/core/CircularProgress";
import Instructions from "../../components/instructions/Instructions";
import { IntState } from "../../context/quizprovider/QuizReducer.type";

export function Quiz() {
  useEffect((): any => {
    dispatch({ type: "initialize-quiz" });
  }, []);

  const { quizName } = useParams();
  const [isLoader, setIsLoader] = useState<boolean>(false);

  const {
    state,
    dispatch,
  }: {
    state: IntState;
    dispatch: any;
  } = useQuiz();

  const startQuiz = () => {
    setIsLoader(true);
    try {
      setTimeout(async () => {
        const res = await axios.get<Questions>(`/quiz/${quizName}`);

        const data = res.data.map((qus) => ({
          ...qus,
          options: [qus.rightOption]
            .concat(qus.wrongOption)
            .sort(() => Math.random() - 0.5),
        }));
        dispatch({ type: "initialize-data", data: data });
        setIsLoader(false);
      }, 1000);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="quiz">
      {state.startQuiz === false && (
        <Header heading="READ THE INSTRUCTION BELOW!!" />
      )}
      {state.startQuiz && state.questionNum < 10 && <Timer />}

      {state.startQuiz ? (
        state.questionNum < 10 ? (
          <Header heading={`${state.userName}!! LET'S PLAY`} />
        ) : (
          <Header heading="GAME OVER" />
        )
      ) : (
        <Button id="button" onClick={() => startQuiz()}>
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
                  type: "increase-qus-number",
                  payload: 1,
                });

                dispatch({
                  type: "next-button",
                  payload: false,
                });
                dispatch({
                  type: "clicked-right",
                  payload: "",
                });
                dispatch({
                  type: "clicked-wrong",
                  payload: "",
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
                  type: "increase-qus-number",
                });

                dispatch({
                  type: "next-button",
                  payload: false,
                });
                dispatch({
                  type: "clicked-right",
                  payload: "",
                });
                dispatch({
                  type: "clicked-wrong",
                  payload: "",
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
                type: "increase-qus-number",
                payload: 1,
              });

              dispatch({
                type: "next-button",
                payload: false,
              });
              dispatch({
                type: "clicked-right",
                payload: "",
              });
              dispatch({
                type: "clicked-wrong",
                payload: "",
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
