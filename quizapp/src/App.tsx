import React from "react";
import Quiz from "./components/Quiz";
import { quizData } from "./helpers/quizData";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Quiz quizData={quizData} />
    </div>
  );
}

export default App;
