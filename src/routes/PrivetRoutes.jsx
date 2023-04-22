import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivetRoutes() {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
