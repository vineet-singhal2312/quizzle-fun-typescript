import React, { useEffect, useState } from "react";
import { setInterval } from "timers";
import { useQuiz } from "../providers/QuizContextProvider";
import "./Timer.css";
export const Timer = () => {
  const { state, dispatch } = useQuiz();
  const [timer, setTimer] = useState<number>(3);

  async function aa() {
    if (timer === 0) {
      await dispatch({
        type: "increase-qus-number",
        payload: 1,
      });
      // await setTimer(3);
    }
  }

  aa();

  useEffect((): any => {
    // const clearInterval = setInterval(() => {
    //   setTimer((time) => time - 1);
    // }, 1000);
    // return clearInterval;

    let myInterval = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    setTimer(() => 3);
  }, [state.questionNum]);

  if (timer < 0) {
    setTimer(5);
  }

  return (
    <div className="timer">
      <h2>Time left: {timer}</h2>
    </div>
  );
};
