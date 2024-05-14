import { QuestionStatus } from "../helpers/types";
import successIcon from "../icons/success.svg";
import wrongIcon from "../icons/wrong.svg";

type AnswerStatusIconProps = {
  status: QuestionStatus;
};

const AnswerStatusIcon: React.FC<AnswerStatusIconProps> = ({ status }) => {
  return (
    <>
      {status === QuestionStatus.noAnswer && (
        <div className="rounded-full m-2 bg-gray-600 w-10 h-10"></div>
      )}
      {status === QuestionStatus.correct && (
        <div className="rounded-full m-2 bg-green-600 w-10 h-10">
          <img src={successIcon} width={40} alt="success icon" />
        </div>
      )}
      {status === QuestionStatus.wrong && (
        <div className="rounded-full m-2 bg-red-600 w-10 h-10">
          <img src={wrongIcon} width={40} alt="success icon" />
        </div>
      )}
    </>
  );
};

export default AnswerStatusIcon;
