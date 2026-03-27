import React, { Children } from "react";
import { Navigate, Outlet } from "react-router";
import { decodeToken } from "../utils/jwt";

export default function ProtectedRoute() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return <Navigate to="/" replace />;

  const decoded = decodeToken(accessToken);

  if (!decoded) return <Navigate to="/" replace />;

  return <Outlet />;
}
