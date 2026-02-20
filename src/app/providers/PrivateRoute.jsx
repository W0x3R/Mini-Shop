import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "@features/auth/hooks";

export const PrivateRoute = () => {
  const currentUser = useCurrentUser();

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};
