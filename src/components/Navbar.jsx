import React from "react";
import useProgressStore from "../stores/progress";

const Navbar = () => {
  const progress = useProgressStore((state) => state.progress);

  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TheOneLove</a>
      </div>
      <nav className="flex-none">
        <progress
          className="progress progress-success w-56"
          value={progress}
          max="100"
        ></progress>
      </nav>
    </header>
  );
};

export default Navbar;
