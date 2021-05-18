import React, { useEffect, useState } from "react";
import { setInterval } from "timers";
import { useQuiz } from "../providers/QuizContextProvider";
import "./Timer.css";
export const Timer = () => {
  const { state, dispatch } = useQuiz();
  const [timer, setTimer] = useState<number>(5);

  useEffect(() => {
    setTimer(() => 5);
  }, [state.questionNum]);

  useEffect((): any => {
    let myInterval = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  if (timer === 0) {
    dispatch({
      type: "increase-qus-number",
      payload: 1,
    });
  }

  // if (timer < 0) {
  //   setTimer(5);
  // }

  return (
    <div className="timer">
      <h2>Time left: {timer}</h2>
    </div>
  );
};
