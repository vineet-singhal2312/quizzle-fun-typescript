import "./Quiz.css";
import { QuestionCard } from "../questioncard/QuestionCard";
import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { createStyles } from "@material-ui/core/styles";
import axios from "axios";
import { intState, useQuiz } from "../providers/QuizContextProvider";
import { ScoreCard } from "../scorecard/ScoreCard";
import { useParams } from "react-router";
import { Header } from "../header/Header";
import { Timer } from "../timer/Timer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

export function Quiz() {
  const { quizName } = useParams();
  // console.log(quizName);

  const {
    state,
    dispatch,
  }: {
    state: intState;
    dispatch: any;
  } = useQuiz();

  type question = {
    quizName: string;

    question: string;

    plusPoint: number;
    negativePoint: number;

    rightOption?: string;
    wrongOption?: string[];
    options?: string[];
  };

  type Questions = question[];

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const res = await axios.get<Questions>(`/${quizName}`);
  //       // console.log(res);

  //       const data = res.data.map((qus) => ({
  //         ...qus,
  //         options: [qus.rightOption]
  //           .concat(qus.wrongOption)
  //           .sort(() => Math.random() - 0.5),
  //       }));
  //       dispatch({ type: "initialize-data", data: data });
  //     } catch (error) {
  //       console.log(error, "error");
  //     }
  //   })();
  // }, []);

  const startQuiz = async () => {
    try {
      const res = await axios.get<Questions>(`/quiz/${quizName}`);
      // console.log(res);

      const data = res.data.map((qus) => ({
        ...qus,
        options: [qus.rightOption]
          .concat(qus.wrongOption)
          .sort(() => Math.random() - 0.5),
      }));
      dispatch({ type: "initialize-data", data: data });
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
        <Header heading=" LET'S PLAY" />
      ) : (
        <Button id="button" onClick={() => startQuiz()}>
          Start
        </Button>
      )}

      <div className="question-card-div">
        {state.startQuiz ? (
          state.questionNum < 10 ? (
            <QuestionCard />
          ) : (
            <ScoreCard />
          )
        ) : (
          <></>
        )}
      </div>

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
      </div>
    </div>
  );
}
