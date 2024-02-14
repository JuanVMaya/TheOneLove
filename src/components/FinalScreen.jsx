import React, { useEffect } from "react";
import house from "../assets/house.jpg";
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
      <img
        src={house}
        className="w-56 h-48 bg-cover bg-center heart-shape self-center"
      />
    </div>
  );
};

export default FinalScreen;
