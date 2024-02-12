import React, { useEffect, useState } from "react";
import useProgressStore from "../stores/progress";
import createLetterSoup from "../utils/createLetterSoup";

const MapTwo = () => {
  const setProgressTo = useProgressStore((state) => state.setProgressTo);
  useEffect(() => {
    setProgressTo(30);
  }, []);

  return <div className="">Letter soup</div>;
};

export default MapTwo;
