import React from "react";
import SignInForm from "./components/SignInForm";
import { Link } from "react-router-dom";
import useAuthStore from "./stores/auth";
import useProgressStore from "./stores/progress";

const Home = () => {
  const authenticated = useAuthStore((state) => state.authenticated);

  return (
    <main className="h-full flex justify-center align-middle py-8 px-4 ">
      {!authenticated && <SignInForm />}
      {authenticated && (
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold m-sauto">
            This is a little interactive fun website. It will check how well you
            our relationship 😏
          </h1>
          <Link className="btn btn-primary" to="/map1">
            Continue
          </Link>
        </div>
      )}
    </main>
  );
};

export default Home;
