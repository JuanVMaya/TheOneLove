import React, { useEffect, useState } from "react";
import useProgressStore from "../stores/progress";
import { ANSWERS } from "../constants";
import AnswerButton from "./AnswerButton";
import { Link } from "react-router-dom";

const MapOne = () => {
  const setProgressTo = useProgressStore((state) => state.setProgressTo);
  const [prank, setPrank] = useState("Inactive");
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setProgressTo(20);
  }, []);

  return (
    <div className="flex flex-col gap-8 p-4 justify-center align-middle">
      <h1 className="font-bold text-2xl text-center">
        When is our anniversary?
      </h1>
      <ul className="flex flex-col align-middle justify-center gap-4">
        {ANSWERS.map((answer, index) => (
          <AnswerButton
            answer={answer}
            correct={correct}
            setCorrect={setCorrect}
            setPrank={setPrank}
            key={index}
          />
        ))}
      </ul>
      {prank === "Active" && (
        <p className="text-center font-semibold">Are you sure? ... 🤨</p>
      )}
      {prank === "Shown" && (
        <p className="text-center font-semibold">Jk, it is 😉</p>
      )}
      <Link className="btn" to="/map2" disabled={!correct}>
        Continue
      </Link>
    </div>
  );
};

export default MapOne;
