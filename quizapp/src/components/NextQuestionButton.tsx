import { NextQuestionButtonProps } from "../helpers/types";

const NextQuestionButton = ({
  isNextQuestionButtonActive,
  nextQuestionLauncher,
}: NextQuestionButtonProps) => {
  return (
    <button
      disabled={!isNextQuestionButtonActive}
      onClick={nextQuestionLauncher}
      className={` rounded-md px-4 m-4 w-16 h-10 ${
        isNextQuestionButtonActive
          ? "bg-emerald-500"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  );
};

export default NextQuestionButton;
