import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { persistor, store } from "@app/store";
import { router } from "@app/router";
import { Spinner } from "@shared/ui";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="bottom-right" expand richColors />
        <Suspense fallback={<Spinner size={80} />}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};
