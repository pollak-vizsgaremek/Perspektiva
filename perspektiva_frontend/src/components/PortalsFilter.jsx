import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function PortalsFilter() {
  const navigate = useNavigate();

  // Az adatok listája (Majd leszívjuk valahonnan, adatb vagy idk)
  const [sources, setSources] = useState([
    { id: 1, name: "Index", active: true },
    { id: 2, name: "HVG", active: false },
    { id: 3, name: "Mandiner", active: false },
    { id: 4, name: "444!", active: true },
  ]);

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
      <header className="bg-white dark:bg-gray-800 shadow-lg rounded-xl mb-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            onClick={backHomePage}
          >
            Vissza
          </button>
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-500 ">
            Források Kezelése
          </h1>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            onClick={goToFilteredNews}
          >
            Keresés {/*Idk kell-e */}
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
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg
                      focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white dark:placeholder-amber-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div
          id="sourceContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSources.map((source) => (
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
                >
                  {source.active
                    ? "Kattints a kikapcsoláshoz"
                    : "Kattints az aktiváláshoz"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-950 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p className="text-sm">&copy; Hírfolyam Szűrő. Tesztoldal.</p>
        </div>
      </footer>
    </>
  );
}
