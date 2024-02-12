import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import SignInForm from "./components/SignInForm";
import MapOne from "./components/MapOne";
import MapTwo from "./components/MapTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <SignInForm /> },
  { path: "/map1", element: <MapOne /> },
  { path: "/map2", element: <MapTwo /> },
]);

export default router;
