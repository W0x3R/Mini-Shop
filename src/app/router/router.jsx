import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "@layout/Layout";
import { PublicRoute, PrivateRoute } from "@app/providers";

const AuthUser = lazy(() => import("@pages/Auth"));
const UserCart = lazy(() => import("@pages/UserCart"));
const Products = lazy(() => import("@pages/Products"));
const About = lazy(() => import("@pages/About"));

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
