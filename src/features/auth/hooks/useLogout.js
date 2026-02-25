import { logout } from "@features/auth/store";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => dispatch(logout());
};
