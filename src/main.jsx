import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./store";

import { router } from "./routes";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import { Loading } from "./components/common";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
