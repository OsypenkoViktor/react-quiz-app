import React, { useEffect, useState } from "react";
import QuizHeader from "./QuizHeader";
import {
  IQuizQuestion,
  IQuizQuestionStatus,
  QuestionStatus,
} from "../helpers/types";
import QuizMainCard from "./QuizMainCard";
import AnswerStatusDisplay from "./AnswersStatusDisplay";

type QuizPropsTypes = {
  quizData: IQuizQuestion[];
};

const Quiz = ({ quizData }: QuizPropsTypes) => {
  // State for the current question being displayed
  const [currentQuestion, setCurrentQuestion] = useState<IQuizQuestion>(
    quizData[0]
  );
  // State to track if the "Next Question" button should be active
  const [isNextQuestionButtonActive, setIsNextQuestionButtonActive] =
    useState(false);
  // State to manage the status of each quiz question
  const [quizStatus, setQuizStatus] = useState<
    Record<number, IQuizQuestionStatus>
  >({});

  useEffect(() => {
    setQuizStatus(getQuizStatus());
  }, [quizData]);

  // Function to initialize quiz status()
  function getQuizStatus() {
    const initialStatus: Record<number, IQuizQuestionStatus> = {};
    quizData.forEach((_, index) => {
      initialStatus[index] = { status: QuestionStatus.noAnswer };
    });
    return initialStatus;
  }

  // Find the index of the current question
  const currentQuestionIndex = quizData.findIndex(
    (quiz) => quiz.question === currentQuestion.question
  );

  // Effect to initialize quiz status when quiz data changes
  useEffect(() => {
    if (
      quizStatus[currentQuestionIndex] &&
      quizStatus[currentQuestionIndex].status !== undefined
    ) {
      setIsNextQuestionButtonActive(
        quizStatus[currentQuestionIndex].status !== QuestionStatus.noAnswer
      );
    }
  }, [quizStatus, currentQuestionIndex]);

  // Function to move to the next question
  function nextQuestionLauncher() {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentQuestion(quizData[nextIndex]);
    }
  }

  function handleAnswer(answerStatus: boolean) {
    setQuizStatus((prevStatus) => ({
      ...prevStatus,
      [currentQuestionIndex]: {
        status: answerStatus ? QuestionStatus.correct : QuestionStatus.wrong,
      },
    }));
  }

  //show text screen if quiz is complited
  const isLastQuestion = currentQuestionIndex + 1 === quizData.length;
  const isAllAnswers =
    quizStatus[currentQuestionIndex]?.status !== QuestionStatus.noAnswer;
  const isQuizComplited = isLastQuestion && isAllAnswers;

  if (isQuizComplited) {
    const correctAnswersCount = Object.values(quizStatus).filter(
      (questionStatus) => questionStatus.status === QuestionStatus.correct
    ).length;
    return (
      <div className="w-[800px] h-[700px] rounded-md bg-white flex flex-col ">
        <QuizHeader
          totalQuestions={quizData.length}
          currentQuestionNumber={currentQuestionIndex + 1}
        />
        <h1 className="text-2xl p-6 text-green-600">Quiz complied.</h1>
        <p className="text-center text-xl p-6 text-green-600">
          You have {correctAnswersCount} correct answers.
        </p>
      </div>
    );
  }

  //default quiz component
  return (
    <div className="w-[800px] h-[700px] rounded-md bg-white flex flex-col justify-between">
      <QuizHeader
        totalQuestions={quizData.length}
        currentQuestionNumber={currentQuestionIndex + 1}
      />
      <QuizMainCard
        question={currentQuestion}
        handleAnswer={handleAnswer}
        isNextQuestionButtonActive={isNextQuestionButtonActive}
        nextQuestionLauncher={nextQuestionLauncher}
      />
      <AnswerStatusDisplay quizStatus={quizStatus} />
    </div>
  );
};

export default Quiz;
