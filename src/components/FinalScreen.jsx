import React, { useEffect } from "react";
import house from "../assets/house.jpg";
import heart from "../assets/heart.gif";
import useProgressStore from "../stores/progress";

const FinalScreen = () => {
  const setProgressTo = useProgressStore((state) => state.setProgressTo);

  useEffect(() => {
    setProgressTo(100);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4 justify-center align-middle">
      <h1 className="font-bold text-2xl text-center">Happy Valentine's Day</h1>
      <p className="label-text-alt text-center">and birthday 🎂</p>
      <img src={heart} className="w-80 h-56 bg-cover bg-center self-center" />
    </div>
  );
};

export default FinalScreen;
