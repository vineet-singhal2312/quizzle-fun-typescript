import { useEffect, useState } from "react";
import { setInterval } from "timers";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import "./Timer.css";
export const Timer = () => {
  const { state, dispatch } = useQuiz();
  const [timer, setTimer] = useState<number>(10);
  useEffect(() => {
    setTimer(10);
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
        type: "next-question",
        payload1: false,
        payload2: "",
        payload3: 1,
      });
    }
  }, [timer, dispatch]);

  return (
    <div className="timer">
      <h2>Time left: {timer}</h2>
    </div>
  );
};
