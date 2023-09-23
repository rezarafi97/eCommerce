import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./store";

import { router } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
          <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
