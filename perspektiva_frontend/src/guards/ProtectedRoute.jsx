import React, { Children } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return <Navigate to="/" replace />;

  const base64Url = accessToken.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const decoded = JSON.parse(window.atob(base64));

  if (!decoded) return <Navigate to="/" replace />;
  if (!decoded.admin || decoded.admin === 0) return <Navigate to="/" replace />;

  return <Outlet />;
}
