import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { persistor, store } from "@app/store";
import { router } from "@app/router";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="bottom-right" expand richColors />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};
