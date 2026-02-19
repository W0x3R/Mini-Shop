import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { persistor, store } from "@app/store";
import { router } from "@app/router";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};
