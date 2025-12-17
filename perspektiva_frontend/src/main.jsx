import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

const LoginPage = lazy(() => import("./components/Login.jsx"));
const RegisterPage = lazy(() => import("./components/Register.jsx"));
const HomePage = lazy(() => import("./components/Home.jsx"));
const PortalsFilterPage = lazy(() => import("./components/PortalsFilter.jsx"));
const FilteredNewsPage = lazy(() => import("./components/FilteredNews.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Portals" element={<PortalsFilterPage />} />
        <Route path="/FilteredNews" element={<FilteredNewsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
