import React, { useEffect } from "react";
import useProgressStore from "../stores/progress";

const MapOne = () => {
  const setProgressTo = useProgressStore((state) => state.setProgressTo);
  useEffect(() => {
    setProgressTo(20);
  }, []);
  return <div>Multiple Choice Question</div>;
};

export default MapOne;
