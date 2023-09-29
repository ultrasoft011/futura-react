import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./index.css";

import { Home } from "./Routes/Home";

import MediaQuery from "react-responsive";
import { MobileConvenios } from "./Routes/ConveniosMobile";
import { ConveniosDesktop } from "./Routes/ConveniosDesktop";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/convenios",
    element: (
      <>
        <MediaQuery maxWidth={767}>
          <MobileConvenios />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <ConveniosDesktop />
        </MediaQuery>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
