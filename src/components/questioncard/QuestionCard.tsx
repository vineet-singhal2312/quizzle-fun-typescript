import React, { useState } from "react";
import { useQuiz } from "../providers/QuizContextProvider";
import "./QuestionCard.css";

type option = {
  option: String;
  isRight: Boolean;
};

type propType = {
  question: String;
  options: option[];
};

export const QuestionCard = ({ question, options }: propType) => {
  const [clickedRight, setClickedRight] = useState("");
  const [clickedWrong, setClickedWrong] = useState("");

  const { state } = useQuiz();

  const rytAns = state.data[state.questionNum]?.rightOption;

  console.log(state.data[state.questionNum]?.wrongOption);
  const wrngAns = state.data[state.questionNum]?.wrongOption;
  const arr = [rytAns].concat(wrngAns).sort(() => Math.random() - 0.5);

  return (
    <div className="question-card">
      <h3 className="question">{state.data[state.questionNum]?.question}</h3>

      <ol className="options">
        {arr.map((option) => (
          <li
            key={option}
            className={
              option === rytAns
                ? `option ${clickedRight}`
                : `option ${clickedWrong}`
            }
            onClick={() => {
              // answerHandler({
              //   option: option,
              //   plusPoint: state.data[state.questionNum]?.plusPoint,
              //   negativePoint: state.data[state.questionNum]?.negativePoint,
              // });
              setClickedRight("right");

              setClickedWrong("wrong");
            }}
          >
            {option}
          </li>
        ))}
      </ol>
    </div>
  );
};
