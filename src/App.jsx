import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

const App = () => {
  return (
    <div className="h-screen w-svw">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
