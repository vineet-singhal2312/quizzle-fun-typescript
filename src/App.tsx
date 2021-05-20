import React from "react";
import "./App.css";
import { Login } from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import { Quiz } from "./pages/quiz/Quiz";
import { Quizzes } from "./pages/quizzes/Quizzes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quizzes/:quizName" element={<Quiz />} />
        <Route path="/quizzes" element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default App;
