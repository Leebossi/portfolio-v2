import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./components/ErrorPage.tsx";
import { Work } from "./components/Work.tsx";
import { Coffee } from "./components/Coffee.tsx";
import { Bikes } from "./components/Bikes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/coffee",
        element: <Coffee />,
      },
      {
        path: "/bike",
        element: <Bikes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
