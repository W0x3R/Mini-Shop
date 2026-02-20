import { createBrowserRouter } from "react-router";
import { MainLayout } from "@layout/MainLayout";
import { AuthUser } from "@pages/Auth";
import { PublicRoute, PrivateRoute } from "@app/providers";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <AuthUser mode="login" />,
      },
      {
        path: "/register",
        element: <AuthUser mode="register" />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [],
      },
    ],
  },
]);
