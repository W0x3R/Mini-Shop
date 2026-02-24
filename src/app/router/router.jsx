import { createBrowserRouter } from "react-router";
import { Layout } from "@layout/Layout";
import { AuthUser, UserCart, Products, About } from "@pages";
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
        element: <Layout />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            element: <Products />,
            path: "/products",
          },
          {
            element: <UserCart />,
            path: "/cart",
          },
        ],
      },
    ],
  },
]);
