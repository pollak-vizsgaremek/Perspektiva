import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Register({ closeRegister = () => void 0 }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [ispublicist, setIsPublicist] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  function save() {
    setError("");
    setLoading(true);

    axios
      .post(`${API_URL}/api/v1/auth/register`, {
        email,
        name,
        password,
        password2,
        ispublicist,
      })
      .then(async (res) => {
        const data = await res.data;
        if (res.status == 201) {
          navigate("/");
        }
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Regisztráció sikertelen");
        setLoading(false);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/Home");
    }
  }, []);

  return (
    <div className="text-black w-full flex justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8 transition-all duration-300 animate-fade-in relative">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center pt-2">
          Regisztráció
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
              Felhasználónév
            </label>
            <input
              type="text"
              placeholder="Felhasználóneved"
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 transition duration-150"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />
          </div>

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
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 transition duration-150"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Jelszó megerősítése
            </label>
            <input
              id="password2"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 transition duration-150"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {/* Publicist Checkbox */}
          <div className="flex items-center gap-3 py-2">
            <input
              type="checkbox"
              name="Publicist"
              id="Publicist"
              checked={ispublicist}
              onChange={(e) => setIsPublicist(e.target.checked)}
              disabled={loading}
              className="w-4 h-4 cursor-pointer accent-red-600"
            />
            <label htmlFor="Publicist" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
              Újságíró vagyok
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? "Regisztráció..." : "Regisztráció"}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Már van fiókod?{" "}
            <a
              href="/"
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Jelentkezz be
            </a>
          </p>
        </div>
        </div>
    </div>
  );
}
