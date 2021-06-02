import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./context/quiz-provider/QuizContextProvider";
import { AuthProvider } from "./context/auth-provider/authContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
