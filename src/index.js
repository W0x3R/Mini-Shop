import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import "./styles/index.css";
import { router } from "@app/router";
import { persistor, store } from "@app/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
