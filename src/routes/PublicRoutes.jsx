import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PublicRoutes() {
    const isLoggedIn = useAuth();
    return isLoggedIn? <Navigate to="/"/>:<Outlet/>
}
