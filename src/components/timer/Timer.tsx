import React, { useEffect, useState } from "react";
import { setInterval } from "timers";
import { useQuiz } from "../../context/quizprovider/QuizContextProvider";
import "./Timer.css";
export const Timer = () => {
  const { state, dispatch } = useQuiz();
  const [timer, setTimer] = useState<number>(30);
  useEffect(() => {
    console.log(state);

    setTimer(30);
  }, [state.questionNum]);

  useEffect((): any => {
    let myInterval = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect((): any => {
    if (timer === 0) {
      dispatch({
        type: "increase-qus-number",
        payload: 1,
      });
    }
  }, [timer]);

  return (
    <div className="timer">
      <h2>Time left: {timer}</h2>
    </div>
  );
};
