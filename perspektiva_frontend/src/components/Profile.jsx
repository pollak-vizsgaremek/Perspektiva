import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Profile({ closeProfile = () => void 0 }) {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("articles");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setEditedEmail(userData.email);
    }
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3300/api/user/me", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const getCategories = () => {
    if (!userData?.favourites) return [];
    const categories = new Set();
    userData.favourites.forEach(fav => {
      if (fav.article?.category) {
        categories.add(fav.article.category);
      }
    });
    return Array.from(categories);
  };

  const getFilteredArticles = () => {
    if (!userData?.favourites) return [];
    if (filterCategory === "all") {
      return userData.favourites.filter(fav => fav.article);
    }
    return userData.favourites.filter(
      fav => fav.article && fav.article.category === filterCategory
    );
  };

  if (!userData) {
    return (
      <div className="text-black">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 text-center">
          <p>Adatok betöltése...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black w-full flex justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full p-8 transition-all duration-300 animate-fade-in relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition duration-150 font-bold"
          onClick={closeProfile}
        >
          ✕
        </button>

        {/* Header Section - Centered */}
        <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {userData.name || "Felhasználó"}
          </h1>
          
          {/* Email Section */}
          <div className="mb-6 max-w-md mx-auto">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left">
              Email
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                disabled={!isEditing}
                className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-600 dark:disabled:text-gray-400 transition duration-150"
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="mb-6 max-w-md mx-auto">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left">
              Jelszó
            </label>
            <div className="flex gap-2">
              <input
                type={showPassword ? "text" : "password"}
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
                disabled={!isEditing}
                placeholder="••••••••"
                className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-red-600 disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:text-gray-600 dark:disabled:text-gray-400 transition duration-150"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-150"
                title={showPassword ? "Jelszó elrejtése" : "Jelszó megjelenítése"}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Favorite Publisher Section */}
          {userData.favourites && userData.favourites.length > 0 && (
            <div className="mt-6 max-w-md mx-auto">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Kedvenc Kiadó</p>
              <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-600 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {userData.favourites[0]?.publisher?.name || "Nincs kedvenc kiadó"}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Articles Tab */}
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Kedvenc Cikkek ({getFilteredArticles().length})
            </h2>
          </div>

          {/* Category Filter */}
          {getCategories().length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3 text-center">
                Szűrés kategória szerint
              </label>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setFilterCategory("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition duration-150 ${
                    filterCategory === "all"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  Összes
                </button>
                {getCategories().map(category => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition duration-150 ${
                      filterCategory === category
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles List */}
          {getFilteredArticles().length > 0 ? (
            <div className="space-y-4">
              {getFilteredArticles().map((fav, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-5 hover:shadow-lg transition duration-150 cursor-pointer hover:border-red-600"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {fav.article?.title || "Cikk"}
                    </h4>
                    {fav.article?.category && (
                      <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-3 py-1 rounded-full text-xs font-semibold">
                        {fav.article.category}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {fav.article?.description || "Nincs leírás"}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Kiadó: <span className="font-semibold">{fav.article?.publisher?.name || "Ismeretlen"}</span>
                    </p>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-150 font-medium text-sm">
                      Megnyitás
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {filterCategory === "all"
                  ? "Még nincsenek kedvenc cikkeid"
                  : `Nincsenek kedvenc cikkek ebben a kategóriában`}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex gap-3 max-w-md mx-auto">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
            >
              Profil szerkesztése
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedEmail(userData.email);
                  setEditedPassword("");
                }}
                className="flex-1 bg-gray-400 dark:bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors duration-300 font-medium"
              >
                Mégsem
              </button>
              <button
                onClick={() => {
                  // TODO: Save changes to API
                  setIsEditing(false);
                  setEditedPassword("");
                }}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
              >
                Mentés
              </button>
            </>
          )}
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("userId");
              navigate("/");
            }}
            className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-300 font-medium"
          >
            Kijelentkezés
          </button>
        </div>
      </div>
    </div>
  );
}
