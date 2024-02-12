import React, { useState } from "react";
import useLetterSoupStore from "../../stores/letterSoup";

const GridUnit = ({ character, valid }) => {
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const addProgressCharacter = useLetterSoupStore(
    (state) => state.addProgressCharacter
  );

  const handleLetterCheck = (valid, character) => {
    if (!valid) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    if (correct) {
      return;
    }
    setCorrect(true);
    addProgressCharacter(character);
  };

  return (
    <button
      className={`btn btn-outline w-10 h-10 ${error ? "bg-error" : ""} ${
        correct ? "bg-success" : ""
      }`}
      onClick={() => handleLetterCheck(valid, character)}
    >
      {character}
    </button>
  );
};

export default GridUnit;
