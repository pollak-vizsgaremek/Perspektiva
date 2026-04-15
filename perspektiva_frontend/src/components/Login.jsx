import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login({ closeLogin = () => void 0 }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  function save() {
    setError("");
    setLoading(true);

    axios
      .post(`${API_URL}/api/v1/auth/login`, {
        email,
        password,
      })
      .then(async (res) => {
        const data = await res.data;
        const base64Url = data.token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        const parsedJwt = JSON.parse(window.atob(base64));

        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("isAdmin", parsedJwt.admin);
        if (res.status == 200) {
          navigate("/Home");
        }
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Bejelentkezés sikertelen");
        setLoading(false);
      });
  }

  return (
    <div className="text-black w-full flex justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8 transition-all duration-300 animate-fade-in relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-150 font-bold"
          onClick={closeLogin}
        >
          ✕
        </button>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center pt-2">
          Bejelentkezés
        </h1>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-600 text-red-800 dark:text-red-100 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 transition duration-150"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Jelszó
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 transition duration-150"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Bejelentkezés..." : "Bejelentkezés"}
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Még nincs fiókod?{" "}
            <a
              href="/Register"
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Regisztrálj
            </a>
          </p>
        </div>

        {/* Cancel Button */}
        <button
          onClick={closeLogin}
          className="w-full mt-4 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-300 font-medium"
        >
          Mégsem
        </button>
      </div>
    </div>
  );
}
