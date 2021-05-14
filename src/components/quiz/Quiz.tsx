import "./Quiz.css";
import { QuestionCard } from "../questioncard/QuestionCard";
import { quizObj } from "../data/quizObj";
import React, { useEffect, useReducer, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { type } from "os";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import { intState, useQuiz } from "../providers/QuizContextProvider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

// const initialState = {
//   score: 0,
// };

// type ACTIONTYPE = { type: "increment" } | { type: "decrement" };

// const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, score: state.score + 1 };

//     case "decrement":
//       return { ...state, score: state.score - 1 };

//     default:
//       throw new Error();
//   }
// };

export function Quiz() {
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

  const [showNextBtn, setShowNextBtn] = useState(false);
  const [quetionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState<Questions>([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get<Questions>("/cliquiz");
        // console.log(res.data);

        const data = res.data.map((qus) => ({
          ...qus,
          options: [qus.rightOption]
            .concat(qus.wrongOption)
            .sort(() => Math.random() - 0.5),
        }));
        console.log(data);
        setQuestions(res.data);
        dispatch({ type: "initialize-data", data: data });

        // console.log(state.data);
      } catch (error) {
        console.log(error, "error");
      }
    })();
  }, []);

  function answerHandler({
    option,
    negativePoint,
    plusPoint,
  }: {
    option: string | undefined;
    negativePoint: number;
    plusPoint: number;
  }) {
    // console.log(option);
    // const { state, dispatch } = useQuiz();
    // const rytAns = state.data[state.questionNum]?.rightOption;

    if (option === state.data[quetionNumber]?.rightOption) {
      console.log("yeahhh");
      dispatch({ type: "increment", negativePoint, plusPoint });
    } else {
      dispatch({ type: "decrement", negativePoint, plusPoint });
    }
    setShowNextBtn(true);
  }

  console.log(state.data);

  const rytAns = state.data[quetionNumber]?.rightOption;

  const wrngAns = state.data[quetionNumber]?.wrongOption;
  const arr = [rytAns].concat(wrngAns).sort(() => Math.random() - 0.5);

  const [clickedRight, setClickedRight] = useState("");
  const [clickedWrong, setClickedWrong] = useState("");

  console.log(state.data[0]?.options);

  return (
    <div className="quiz">
      <h1>SCORE : {state.score}</h1>

      <div className="question-card">
        <h3 className="question">{state.data[quetionNumber]?.question}</h3>

        <ol className="options">
          {state.data[quetionNumber]?.options.map((option: any) => (
            <li
              key={option}
              className={
                option === state.data[quetionNumber]?.rightOption
                  ? `option ${clickedRight}`
                  : `option ${clickedWrong}`
              }
              onClick={() => {
                answerHandler({
                  option: option,
                  plusPoint: state.data[quetionNumber]?.plusPoint,
                  negativePoint: state.data[quetionNumber]?.negativePoint,
                });
                setClickedRight("right");

                setClickedWrong("wrong");
              }}
            >
              {option}
            </li>
          ))}
        </ol>
      </div>

      {showNextBtn && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setQuestionNumber(quetionNumber + 1);
            setShowNextBtn(false);
            setClickedRight("");

            setClickedWrong("");
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
}
