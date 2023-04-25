"use client";

import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

interface QuestionBoxProps {
  setter: Dispatch<SetStateAction<boolean>>;
}

const QuestionBox: FunctionComponent<QuestionBoxProps> = ({ setter }) => {
  const [isAnswered, setIsAnsered] = useState(false);
  const [answer, setAnswer] = useState(false);
  const clickHandler = (answer: boolean) => {
    setAnswer(answer);
    setIsAnsered(true);
    setter(answer);
  };
  return (
    <div className="question-box flex flex-col justify-center items-center">
      {!isAnswered && (
        <div>
          <div>
            <h1>Tudod mit eszel ma?</h1>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <button
              onClick={() => clickHandler(true)}
              className="bg-green-400/40 p-2 rounded"
            >
              Igen
            </button>
            <button
              onClick={() => clickHandler(false)}
              className="bg-red-400/40 p-2 rounded"
            >
              Nem
            </button>
          </div>
        </div>
      )}
      {isAnswered && (
        <div>{`${
          answer ? "Akkor meg mit keresel itt?" : "Akkor jó helyen jársz!"
        }`}</div>
      )}
    </div>
  );
};

export default QuestionBox;
