import React, { useEffect, useState } from "react";
import useProgressStore from "../stores/progress";
import { ANSWERS_THREE } from "../constants";
import AnswerButton from "./AnswerButton";
import { Link } from "react-router-dom";

const MapFour = () => {
  const setProgressTo = useProgressStore((state) => state.setProgressTo);
  const [prank, setPrank] = useState("Inactive");
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setProgressTo(80);
  }, []);

  return (
    <div className="flex flex-col gap-8 p-4 justify-center align-middle">
      <h1 className="font-bold text-2xl text-center">
        Most important creature in your life?
      </h1>
      <ul className="flex flex-col align-middle justify-center gap-4">
        {ANSWERS_THREE.map((answer, index) => (
          <AnswerButton
            answer={answer}
            correct={correct}
            setCorrect={setCorrect}
            setCorrectFeedback={setPrank}
            key={index}
            prankActive
          />
        ))}
      </ul>
      {prank === "Active" && (
        <p className="text-center font-semibold">🤨Wrong, it is obviously me</p>
      )}
      {prank === "Shown" && (
        <p className="text-center font-semibold">Fine...</p>
      )}
      <Link className="btn" to="/final" disabled={prank !== "Shown"}>
        Continue
      </Link>
    </div>
  );
};

export default MapFour;
