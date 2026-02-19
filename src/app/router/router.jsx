import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "@layout/MainLayout";
import { AuthUser } from "@pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/register" replace />,
      },
      {
        path: "register",
        element: <AuthUser mode="register" />,
      },
      {
        path: "login",
        element: <AuthUser mode="login" />,
      },
    ],
  },
]);
