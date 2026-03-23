import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

const LoginPage = lazy(() => import("./components/Login.jsx"));
const RegisterPage = lazy(() => import("./components/Register.jsx"));
const HomePage = lazy(() => import("./components/Home.jsx"));
const PortalsFilterPage = lazy(() => import("./components/PortalsFilter.jsx"));
const FilteredNewsPage = lazy(() => import("./components/FilteredNews.jsx"));
const ProfilePage = lazy(() => import("./components/Profile.jsx"));

function LoadingFallback() {
  return <div className="flex items-center justify-center h-screen">Betöltés...</div>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Portals" element={<PortalsFilterPage />} />
          <Route path="/FilteredNews" element={<FilteredNewsPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
