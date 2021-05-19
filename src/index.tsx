import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./context/quizprovider/QuizContextProvider";
import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
