import React, { useEffect, useState } from "react";
import useProgressStore from "../stores/progress";
import createLetterSoup from "../utils/createLetterSoup";
import useLetterSoupStore from "../stores/letterSoup";
import { v4 as uuidv4 } from "uuid";
import GridUnit from "./letterSoup/GridUnit";
import { Link } from "react-router-dom";

const MapTwo = () => {
  const [soup, setSoup] = useState([]);
  const setProgressTo = useProgressStore((state) => state.setProgressTo);
  const isWon = useLetterSoupStore((state) => state.isWon);
  useEffect(() => {
    setProgressTo(30);
    setSoup(createLetterSoup(["oscar", "mila", "ottawa"], 8));
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold text-2xl text-center">
        Letter Soup: Important things
      </h1>
      <div className="flex flex-col justify-center align-middle p-2">
        {soup.length &&
          soup.map((row, index) => (
            <div className="flex justify-center" key={index}>
              {row.map((letter) => (
                <GridUnit
                  character={letter.character}
                  valid={letter.valid}
                  key={uuidv4()}
                />
              ))}
            </div>
          ))}
      </div>
      <div className="block">
        <h2 className="font-xl font-medium">Instructions:</h2>
        <p>There are three words that need to be found</p>
      </div>
      {isWon && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Well done! 😉</span>
        </div>
      )}
      <Link className="btn" disabled={!isWon}>
        Continue
      </Link>
    </div>
  );
};

export default MapTwo;
