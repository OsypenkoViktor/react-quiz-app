import React, { useState } from "react";
import { QuizMainCardTypes } from "../helpers/types";
import AnswerOptionCard from "./AnswerOptionCard";
import NextQuestionButton from "./NextQuestionButton";

const QuizMainCard = ({
  question,
  handleAnswer,
  isNextQuestionButtonActive,
  nextQuestionLauncher,
}: QuizMainCardTypes) => {
  const [isAnswerAllowed, setIsAnswerAllowed] = useState(true);

  function freezeQuestion(isFreeze: boolean) {
    setIsAnswerAllowed(isFreeze);
  }

  return (
    <div className="p-8 flex flex-col justify-between">
      <h1 className="text-2xl">{question.question}</h1>
      <div>
        {question.answers.map((option, index) => (
          <AnswerOptionCard
            key={index}
            option={option}
            freezeQuestion={freezeQuestion}
            isAnswerAllowed={isAnswerAllowed}
            handleAnswer={handleAnswer}
          />
        ))}
        <NextQuestionButton
          nextQuestionLauncher={nextQuestionLauncher}
          isNextQuestionButtonActive={isNextQuestionButtonActive}
        />
      </div>
    </div>
  );
};

export default QuizMainCard;
