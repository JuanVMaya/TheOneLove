import React, { useState } from "react";
import useAuthStore from "../stores/auth";
import useProgressStore from "../stores/progress";

const SignInForm = () => {
  const [passcode, setPasscode] = useState("");
  const signIn = useAuthStore((state) => state.signIn);
  const [error, setError] = useState(false);
  const setProgressTo = useProgressStore((state) => state.setProgressTo);

  const handlePasscodeSubmit = (event) => {
    event.preventDefault();
    if (passcode !== "1999") {
      setError(true);
      return;
    }
    signIn();
    setPasscode("");
    setProgressTo(10);
  };
  const handlePasscodeInput = (event) => {
    setPasscode(event.target.value);
    if (error) {
      setError(false);
    }
  };

  return (
    <form
      onSubmit={handlePasscodeSubmit}
      className="h-96 flex flex-col justify-center align-middle w-full gap-4"
    >
      <h1 className="text-3xl font-bold">Hi beb!</h1>
      {error && (
        <div role="alert" className="alert alert-error flex">
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Boo! Tomato 🍅</span>
        </div>
      )}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">
            Easiest 4-pin digit you have used in the past 😉
          </span>
        </div>
        <input
          type="password"
          placeholder="Type here"
          value={passcode}
          onChange={handlePasscodeInput}
          className={`input input-bordered w-full max-w-xs ${
            error ? "input-error" : ""
          }`}
        />
      </label>
      <button className="btn" type="submit" disabled={passcode.length < 4}>
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
