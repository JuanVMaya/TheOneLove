import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import SignInForm from "./components/SignInForm";
import MapOne from "./components/MapOne";
import MapTwo from "./components/MapTwo";
import MapThree from "./components/MapThree";
import MapFour from "./components/MapFour";
import FinalScreen from "./components/FinalScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <SignInForm /> },
  { path: "/map1", element: <MapOne /> },
  { path: "/map2", element: <MapTwo /> },
  { path: "/map3", element: <MapThree /> },
  { path: "/map4", element: <MapFour /> },
  { path: "/final", element: <FinalScreen /> },
]);

export default router;
