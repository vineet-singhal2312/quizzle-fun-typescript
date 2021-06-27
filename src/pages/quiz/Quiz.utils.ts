import axios from "axios";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import { QUIZ_ACTION } from "../../context/quiz-provider/QuizReducer.type";
import { Questions } from "./quizType";

export const StartQuiz = ({
  setIsLoader,
  quizName,
  dispatch,
  token,
}: {
  setIsLoader: any;
  quizName: string;
  dispatch: any;
  token: string;
}) => {
  setIsLoader(true);

  try {
    setTimeout(async () => {
      const res = await axios.get<Questions>(
        `https://quizzle-typescript.herokuapp.com/quiz/${quizName}`,
        // `http://localhost:8000/quiz/${quizName}`,

        { headers: { authorization: token } }
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
