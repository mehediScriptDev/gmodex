import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import Error from "./Components/Error.jsx";
import Girls from "./Components/Girls.jsx";
import Homesection from "./Components/Homesection.jsx";
import Guns from "./Components/Guns.jsx";
import Drugs from "./Components/Drugs.jsx";
import Crypto from "./Components/Crypto.jsx";
import Hitman from "./Components/Hitman.jsx";
import Financial from "./Components/Financial.jsx";
import Hacking from "./Components/Hacking.jsx";
import Organs from "./Components/Organs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Homesection></Homesection>,
      },
      {
        path: "/girls",
        element: <Girls></Girls>,
      },
      {
        path: "/guns",
        element: <Guns></Guns>,
      },
      {
        path: "/drugs",
        element: <Drugs></Drugs>,
      },
      {
        path: "/crypto",
        element: <Crypto></Crypto>,
      },
      {
        path: "/hitman",
        element: <Hitman></Hitman>,
      },
      {
        path: "/fraud",
        element: <Financial></Financial>,
      },
      {
        path: "/tools",
        element: <Hacking></Hacking>,
      },
      {
        path: "/organs",
        element: <Organs></Organs>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
