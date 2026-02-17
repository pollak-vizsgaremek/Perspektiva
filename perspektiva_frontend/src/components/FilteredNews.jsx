import React from "react";
import { useNavigate } from "react-router";

export default function FilteredNews() {
  const navigate = useNavigate();

  // Csak teszt niggerek, ez nem tudom honnan jön majd XD
  const allNews = [
    {
      id: 1,
      source: "Index",
      title: "Rendkívüli hőség várható a hétvégén",
      excerpt:
        "Akár 40 fok is lehet az árnyékban, mutatjuk a legforróbb területeket és a vízparti lehetőségeket.",
      date: "2024.05.20",
      category: "Belföld",
    },
    {
      id: 2,
      source: "444!",
      title: "Új parkot adtak át a belvárosban",
      excerpt:
        "Több mint kétszáz fát ültettek el, és egy modern játszótér is helyet kapott a lakók örömére.",
      date: "2024.05.19",
      category: "Budapest",
    },
    {
      id: 3,
      source: "Index",
      title: "Megnyertük a vízilabda döntőt!",
      excerpt:
        "Hatalmas küzdelemben, az utolsó percben dőlt el a bajnoki cím sorsa a nemzeti uszodában.",
      date: "2024.05.18",
      category: "Sport",
    },
    {
      id: 4,
      source: "444!",
      title: "A technológia jövője: MI a konyhában",
      excerpt:
        "Kipróbáltuk a legújabb okoseszközöket, amik helyettünk főzik meg a vasárnapi ebédet.",
      date: "2024.05.17",
      category: "Tech",
    },
    {
      id: 5,
      source: "Mandiner",
      title: "Még a Holdról is látni Mohácsot",
      excerpt: "Rákos 2/3-ad",
      date: "2024.05.17",
      category: "Közélet",
    },
  ];

  // Aktív források, ezt is megoldjuk majd máshogy idk
  const activeSources = ["Index", "444!"];

  const filteredNews = allNews.filter((news) =>
    activeSources.includes(news.source),
  );

  function backToPortalFilters() {
    navigate("/Portals");
  }

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-lg rounded-xl mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-500">
            Saját Hírfolyam
          </h1>
          <input
            type="text"
            id="sourceSearch"
            placeholder="Keresés..."
            className="w-120 p-3 border border-gray-300 dark:border-gray-700 rounded-lg
                      focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />

          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            onClick={backToPortalFilters}
          >
            Vissza
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/*mobilom 1, közepes mérettől (md) 2 oszlop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <article
                key={news.id}
                className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border-t-4 border-red-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                    {news.source}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {news.date}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3 min-h-[3.5rem] leading-tight">
                  {news.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {news.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400 italic">
                    #{news.category}
                  </span>
                  <button className="text-red-600 font-bold hover:text-red-700 transition-colors">
                    OLVASÁS &rarr;
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl italic">
                Nincs megjeleníthető hír...
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-950 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; Hírfolyam Szűrő. Minden jog fenntartva.</p>
        </div>
      </footer>
    </>
  );
}
