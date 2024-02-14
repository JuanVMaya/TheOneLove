import React, { useEffect, useState } from "react";
import useProgressStore from "../stores/progress";
import { ANSWERS_TWO } from "../constants";
import AnswerButton from "./AnswerButton";
import house from "../assets/house.jpg";
import { Link } from "react-router-dom";

const MapOne = () => {
  const setProgressTo = useProgressStore((state) => state.setProgressTo);
  const [correctFeedback, setCorrectFeedback] = useState("Inactive");
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setProgressTo(60);
  }, []);

  return (
    <div className="flex flex-col gap-8 p-4 justify-center align-middle">
      <h1 className="font-bold text-2xl text-center">
        When did we put an offer for our house?
      </h1>
      <ul className="flex flex-col align-middle justify-center gap-4">
        {ANSWERS_TWO.map((answer, index) => (
          <AnswerButton
            answer={answer}
            correct={correct}
            setCorrect={setCorrect}
            setCorrectFeedback={setCorrectFeedback}
            key={index}
          />
        ))}
      </ul>

      <Link className="btn" to="/map4" disabled={!correct}>
        Continue
      </Link>
      {correctFeedback === "Shown" && (
        <p className="text-center font-semibold">Nice!</p>
      )}
      {correctFeedback === "Active" && (
        <img
          src={house}
          className="w-56 h-48 bg-cover bg-center heart-shape self-center"
        />
      )}
    </div>
  );
};

export default MapOne;
