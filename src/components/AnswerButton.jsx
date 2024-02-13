import React, { useState } from "react";

const AnswerButton = ({ answer, setPrank, correct, setCorrect }) => {
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
    setPrank("Active");
    setError(true);
    setTimeout(() => {
      setError(false);
      setCorrect(true);
      setPrank("Shown");
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
