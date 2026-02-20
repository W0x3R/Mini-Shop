import { useDispatch } from "react-redux";
import { logout } from "@features/auth/store";

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => dispatch(logout());
};
