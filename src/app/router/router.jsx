import { Layout } from "@app/Layout";
import { PrivateRoute, PublicRoute } from "@app/providers";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const AuthUserPage = lazy(() => import("@pages/Auth"));
const UserCartPage = lazy(() => import("@pages/UserCart"));
const ProductsPage = lazy(() => import("@pages/Products"));
const AboutPage = lazy(() => import("@pages/About"));
const NotFoundPage = lazy(() => import("@pages/NotFound"));

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <AuthUserPage mode="login" />,
      },
      {
        path: "/register",
        element: <AuthUserPage mode="register" />,
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
            element: <AboutPage />,
          },
          {
            element: <ProductsPage />,
            path: "/products",
          },
          {
            element: <UserCartPage />,
            path: "/cart",
          },
          {
            element: <NotFoundPage />,
            path: "/404",
          },
          {
            element: <Navigate to="/404" replace />,
            path: "*",
          },
        ],
      },
    ],
  },
]);
