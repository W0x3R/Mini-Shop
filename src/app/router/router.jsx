import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "../../Layout/Layout";
import { AuthUser } from "../../pages/AuthUser/AuthUser";

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
