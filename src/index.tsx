import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./context/quizprovider/QuizContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
