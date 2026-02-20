import { createBrowserRouter } from "react-router";
import { Layout } from "@layout/Layout";
import { AuthUser } from "@pages/Auth";
import { PublicRoute, PrivateRoute } from "@app/providers";
import { About } from "@pages/About";

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
        element: <Layout />,
        children: [
          {
            index: true,
            element: <About />,
          },
        ],
      },
    ],
  },
]);
