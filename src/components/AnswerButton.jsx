import React, { useState } from "react";

const AnswerButton = ({
  answer,
  setCorrectFeedback,
  correct,
  setCorrect,
  prankActive,
}) => {
  const [error, setError] = useState(false);

  const handleCheckResponse = (attempt) => {
    if (!attempt) return;
    const { correctFlag } = attempt;
    if (!correctFlag) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }
    if (prankActive) {
      setCorrectFeedback("Active");
      setError(true);
      setTimeout(() => {
        setError(false);
        setCorrect(true);
        setCorrectFeedback("Shown");
      }, 3000);
      return;
    }
    setCorrectFeedback("Active");
    setCorrect(true);
    setTimeout(() => {
      setCorrectFeedback("Shown");
    }, 3000);
  };

  return (
    <li className="flex justify-center">
      <button
        className={`btn w-80 flex flex-wrap ${error ? "btn-error" : ""} ${
          correct && answer.correctFlag ? "btn-success" : ""
        }`}
        onClick={() => {
          handleCheckResponse(answer);
        }}
      >
        {answer.text}
      </button>
    </li>
  );
};

export default AnswerButton;
