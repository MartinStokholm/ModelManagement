import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import JwtParser from "../api/JwtParse";

const RequireAuth = ({ allowedRoles }: { allowedRoles: any }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const roles = JwtParser(localStorage.getItem("token") as string)[
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
  ];
  return allowedRoles?.includes(roles) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/notauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
