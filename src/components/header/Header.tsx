import axios from "axios";
import { useParams } from "react-router";
import { intState, useQuiz } from "../../context/QuizContextProvider";
import "./Header.css";
import Button from "@material-ui/core/Button";

export const Header = ({ heading }: { heading: string }) => {
  const { quizName } = useParams();
  const {
    state,
    dispatch,
  }: {
    state: intState;
    dispatch: any;
  } = useQuiz();
  // useEffect((): any => {
  //   const clearInterval = setInterval(() => {
  //     setTimer((time) => time - 1);
  //   }, 1000);
  //   return clearInterval;
  // }, []);

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
    <div className="header">
      <h1 className="header-heading">{heading}</h1>
    </div>
  );
};
