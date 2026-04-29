import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function PortalsFilter() {
  useEffect(() => {
    document.title = `Perspektíva — Források Kezelése`;
  }, []);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  // Az adatok listája
  const [sources, setSources] = useState(
    localStorage.getItem("sources")
      ? JSON.parse(localStorage.getItem("sources"))
      : [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediums = async () => {
      try {
        const response = await fetch(`${API_URL}/api/mediums`);
        const data = await response.json();

        // Map mediums to sources format and preserve active state from localStorage
        const storedSources = localStorage.getItem("sources")
          ? JSON.parse(localStorage.getItem("sources"))
          : [];

        const fetchedSources = data.map((medium) => ({
          id: medium.id,
          name: medium.name,
          active:
            storedSources.find((s) => s.id === medium.id)?.active || false,
        }));

        setSources(fetchedSources);
      } catch (error) {
        console.error("Failed to fetch mediums:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchMediums();
  }, [API_URL]);

  useEffect(() => {
    localStorage.setItem("sources", JSON.stringify(sources));
  }, [sources]);

  // Keresési kifejezés állapota
  const [searchTerm, setSearchTerm] = useState("");

  function backHomePage() {
    navigate("/Home");
  }
  function goToFilteredNews() {
    navigate("/FilteredNews");
  }

  // Szűrési logika a keresőhöz
  const filteredSources = sources.filter((source) =>
    source.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            onClick={backHomePage}
          >
            Vissza
          </button>
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-500 text-center">
            Források Kezelése
          </h1>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            onClick={goToFilteredNews}
          >
            Keresés
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-12 mb-20">
        <h2 className="text-3xl font-extrabold text-amber-400 dark:text-white mb-6">
          Válaszd Ki Kedvenc Hírforrásaidat
        </h2>

        <div className="mb-8">
          <input
            type="text"
            id="sourceSearch"
            placeholder="Keresés hírforrás névre (pl. Mandiner)..."
            className="w-full max-w-2xl p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white dark:placeholder-amber-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Források betöltése...</p>
          </div>
        ) : (
          <div
            id="sourceContainer"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredSources.length > 0 ? (
              filteredSources.map((source) => (
            <div
              key={source.id}
              className={`source-card p-6 rounded-xl shadow-lg border-2 cursor-pointer transition duration-300 ${
                source.active
                  ? "bg-white dark:bg-gray-800 active border-red-500"
                  : "bg-gray-200 dark:bg-gray-700 border-transparent"
              }`}
            >
              <div className="flex items-center space-x-4 justify-center">
                <span
                  className={`text-3xl ${!source.active && "opacity-50"}`}
                  role="img"
                >
                  {/* Majd a logója a hírközlő oldalnak?? Vagy felőlem kuka is lehet, csak egy ötlet nyilván*/}
                </span>
                <h3 className="text-xl font-bold source-name text-gray-900 dark:text-white">
                  {source.name}
                </h3>
              </div>

              {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Fókuszban a belföld és a gazdaság.
              </p>  Kell ilyen ide? Leírja röviden, hogy melyik mit csinál, benne van, hogy kicsit haszontalan, mert nem biztos, hogy egy mondatra le tudjuk szűkíteni XD */}

              <div className="mt-4 flex justify-between items-center gap-2">
                <span
                  className={`status-label font-semibold text-sm ${
                    source.active
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-500"
                  }`}
                >
                  {source.active ? "AKTÍV" : "INAKTÍV"}
                </span>
                <button
                  className={`toggle-button text-sm ${
                    source.active
                      ? "text-gray-500 hover:text-red-700 dark:text-gray-400 dark:hover:text-red-400"
                      : "text-amber-400 hover:text-amber-500 dark:text-blue-400 dark:hover:text-blue-300"
                  }`}
                  onClick={() => {
                    setSources((prevSources) =>
                      prevSources.map((item) =>
                        item.id === source.id
                          ? { ...item, active: !item.active }
                          : item,
                      ),
                    );
                  }}
                >
                  {source.active
                    ? "Kattints a kikapcsoláshoz"
                    : "Kattints az aktiváláshoz"}
                </button>
              </div>
            </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">Nem találhatók források.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 w-full bg-gray-800 dark:bg-gray-950 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p className="text-sm">&copy; Hírfolyam Szűrő. Tesztoldal.</p>
        </div>
      </footer>
    </>
  );
}
