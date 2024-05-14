import { useEffect, useState } from "react";
import { IAnswer } from "../helpers/types";

const AnswerOptionCard = ({
  option,
  freezeQuestion,
  isAnswerAllowed,
  handleAnswer,
}: {
  option: IAnswer;
  freezeQuestion: (isFreeze: boolean) => void;
  isAnswerAllowed: boolean;
  handleAnswer: (isCorrectAnswer: boolean) => void;
}) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    setBackgroundColor("bg-gray-500");
    freezeQuestion(true);
  }, [option]);
  function handleOptionClick() {
    if (!isAnswerAllowed) return;
    if (!option.isCorrect) {
      setBackgroundColor("bg-red-500");
    } else {
      setBackgroundColor("bg-green-500");
    }
    handleAnswer(option.isCorrect);
    freezeQuestion(false);
  }

  return (
    <p
      className={`${backgroundColor} rounded-md m-4 p-4 ${
        isAnswerAllowed ? "cursor-pointer" : null
      }`}
      onClick={handleOptionClick}
    >
      {option.text}
    </p>
  );
};

export default AnswerOptionCard;
