import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "@features/auth/hooks";

export const PublicRoute = () => {
  const currentUser = useCurrentUser();

  return currentUser ? <Navigate to="/" replace /> : <Outlet />;
};
