import { useCurrentUser } from "@features/auth/hooks";
import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const currentUser = useCurrentUser();

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};
