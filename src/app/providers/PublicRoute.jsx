import { useCurrentUser } from "@features/auth/hooks";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const currentUser = useCurrentUser();

  return currentUser ? <Navigate to="/" replace /> : <Outlet />;
};
