import { router } from "@app/router";
import { persistor, store } from "@app/store";
import { Spinner } from "@shared/ui/Spinner";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

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
