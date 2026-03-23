import React, { Children } from "react";
import { Navigate, Outlet } from "react-router";
import { useNavigate } from "../utils/jwt";

export default function ProtectedRoute(){children} {
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken) return <Navigate to="/" replace/>;
    
    const decorded = decodeJwt(accessToken);

    if (!decoded) return <Navigate to="/" replace/>;

    return <Outlet/>;
}