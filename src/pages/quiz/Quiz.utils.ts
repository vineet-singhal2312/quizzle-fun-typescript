import axios from "axios";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import { QUIZ_ACTION } from "../../context/quiz-provider/QuizReducer.type";
import { Questions } from "./quizType";

export const StartQuiz = ({
  setIsLoader,
  quizName,
  dispatch,
}: {
  setIsLoader: any;
  quizName: string;
  dispatch: any;
}) => {
  setIsLoader(true);

  try {
    setTimeout(async () => {
      const res = await axios.get<Questions>(
        `https://quizzle-typescript.herokuapp.com/quiz/${quizName}`
      );

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
