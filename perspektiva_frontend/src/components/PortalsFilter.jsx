import React from "react";
import { useNavigate } from "react-router";

export default function PortalsFilter() {
  const navigate = useNavigate();

  function backHomePage() {
    navigate("/Home");
  }
  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-lg rounded-xl mb-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            onClick={backHomePage}
          >
            Vissza
          </button>
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-500 ">
            Források Kezelése
          </h1>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150">
            Mentés {/*Idk kell-e */}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-12 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
          Válaszd Ki Kedvenc Hírforrásaidat
        </h2>

        <div className="mb-8">
          <input
            type="text"
            id="sourceSearch"
            placeholder="Keresés hírforrás névre (pl. Mandiner)..."
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                      focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        <div
          id="sourceContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div className="source-card p-6 rounded-xl shadow-lg border-2 cursor-pointer transition duration-300 bg-white dark:bg-gray-800 active">
            <div className="flex items-center space-x-4 justify-center">
              <span className="text-3xl" role="img">
                {/* Majd a logója a hírközlő oldalnak?? Vagy felőlem kuka is lehet, csak egy ötlet nyilván*/}
              </span>
              <h3 className="text-xl font-bold source-name">Index</h3>
            </div>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Fókuszban a belföld és a gazdaság.
            </p> */}
            <div className="mt-4 flex justify-between items-center gap-2">
              <span className="status-label text-red-600 dark:text-red-400 font-semibold text-sm">
                AKTÍV
              </span>
              <button className="toggle-button text-sm text-gray-500 hover:text-red-700 dark:text-gray-400 dark:hover:text-red-400">
                Kattints a kikapcsoláshoz
              </button>
            </div>
          </div>

          <div className="source-card p-6 rounded-xl shadow-md border-2 cursor-pointer transition duration-300 bg-gray-200 dark:bg-gray-700">
            <div className="flex items-center space-x-4 justify-center">
              <span className="text-3xl opacity-50" role="img">
                {/* Majd a logója a hírközlő oldalnak?? Vagy felőlem kuka is lehet, csak egy ötlet nyilván*/}
              </span>
              <h3 className="text-xl font-bold source-name ">HVG</h3>
            </div>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Heti gazdasági és politikai magazin.
            </p> */}
            <div className="mt-4 flex justify-between items-center gap-2">
              <span className="status-label text-gray-500 dark:text-gray-500 font-semibold text-sm">
                INAKTÍV
              </span>
              <button className="toggle-button text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Kattints az aktiváláshoz
              </button>
            </div>
          </div>

          <div className="source-card p-6 rounded-xl shadow-md border-2 cursor-pointer transition duration-300 bg-gray-200 dark:bg-gray-700">
            <div className="flex items-center space-x-4 justify-center">
              <span className="text-3xl opacity-50" role="img">
                {/* Majd a logója a hírközlő oldalnak?? Vagy felőlem kuka is lehet, csak egy ötlet nyilván*/}
              </span>
              <h3 className="text-xl font-bold source-name ">Mandíner</h3>
            </div>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">Kormányközeli</p> */}
            <div className="mt-4 flex justify-between items-center gap-2">
              <span className="status-label text-gray-500 dark:text-gray-500 font-semibold text-sm">
                INAKTÍV
              </span>
              <button className="toggle-button text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Kattints az aktiváláshoz
              </button>
            </div>
          </div>

          <div className="source-card p-6 rounded-xl shadow-lg border-2 cursor-pointer transition duration-300 bg-white dark:bg-gray-800 active">
            <div className="flex items-center space-x-4 justify-center">
              <span className="text-3xl" role="img">
                {/* Majd a logója a hírközlő oldalnak?? Vagy felőlem kuka is lehet, csak egy ötlet nyilván*/}
              </span>
              <h3 className="text-xl font-bold source-name">444!</h3>
            </div>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Fókuszban a belföld és a gazdaság.
            </p> */}
            <div className="mt-4 flex justify-between items-center gap-2">
              <span className="status-label text-red-600 dark:text-red-400 font-semibold text-sm">
                AKTÍV
              </span>
              <button className="toggle-button text-sm text-gray-500 hover:text-red-700 dark:text-gray-400 dark:hover:text-red-400">
                Kattints a kikapcsoláshoz
              </button>
            </div>
          </div>
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
