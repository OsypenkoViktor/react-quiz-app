import React from "react";
import { AnswerStatusDisplayProps } from "../helpers/types";
import AnswerStatusIcon from "./AnswerStatusIcon";

const AnswerStatusDisplay = ({ quizStatus }: AnswerStatusDisplayProps) => {
  console.log();

  return (
    <div className="flex p-8">
      {Object.values(quizStatus).map((status, index) => (
        <AnswerStatusIcon key={index} status={status.status} />
      ))}
    </div>
  );
};

export default AnswerStatusDisplay;
