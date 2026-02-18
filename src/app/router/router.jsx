import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "@layout/Layout";
import { AuthUser } from "@components/auth-user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
