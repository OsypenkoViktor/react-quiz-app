import React from "react";
import { QuizHeaderType } from "../helpers/types";

const QuizHeader = ({
  totalQuestions,
  currentQuestionNumber,
}: QuizHeaderType) => {
  return (
    <header className="text-[#02d8e9] h-20">
      <h1 className="text-2xl p-2">
        Question {currentQuestionNumber} of {totalQuestions}
      </h1>
      <hr />
    </header>
  );
};

export default QuizHeader;
