import { useEffect, useState, useRef, useCallback } from "react";
import { useIntersection } from "../hooks/useIntersection";
import { useNavigate } from "react-router";
import Profile from "./Profile";

export default function Home() {
  const [article, setArticle] = useState([]);
  const [oldalSzam, setOldalSzam] = useState(1);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  const nextPage = useCallback(
    function () {
      setOldalSzam((prevOldalszam) => {
        const maxPage = Math.ceil(article.length / 4);

        if (maxPage > oldalSzam) return prevOldalszam + 1;
        return prevOldalszam;
      });
    },
    [article.length, oldalSzam],
  );

  function getarticle() {
    fetch("http://localhost:3300/api/articles").then(async (res) => {
      const data = await res.json();

      console.log(data);

      setArticle(data);
    });
  }
  useEffect(() => {
    getarticle();
  }, []);

  useEffect(() => {
    if (isVisible) {
      nextPage();
    }
  }, [nextPage, isVisible]);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  function ProfilePage() {
    navigate("/Profile");
  }

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      <div>
        <header className="bg-white shadow-md rounded-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center rounded-xl">
            <h1 className="text-3xl font-bold text-red-600">PERSPEKTÍVA</h1>

            <nav className="space-x-6 hidden md:block">
              <a
                href="#"
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
              >
                Kezdőlap
              </a>
              <a
                href="#"
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
              >
                Politika
              </a>
              <a
                href="#"
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
              >
                Sport
              </a>
              <a
                href="#"
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
              >
                Tech
              </a>
              <a
                href="#"
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
              >
                Életmód
              </a>
              <a
                href="/Portals"
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
              >
                Médiumok
              </a>
            </nav>
            <button
              onClick={openProfile}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
            >
              Profil
            </button>
          </div>
          {/* <p className="text-gray-600 float-left">
          Fedezd fel a legfrissebb híreket és elemzéseket!
        </p> */}
        </header>

        <main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-64 bg-red-200 flex items-center justify-center text-red-700 font-bold">
                  KIEMELT HÍR KÉPE
                </div>
              </div>
              <div className="p-6 md:w-1/2">
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                  Politika
                </span>
                <h2 className="mt-1 mb-3 text-3xl font-bold text-gray-900 leading-tight hover:text-red-600 transition duration-150">
                  <a href="#">
                    Áttörő Nemzetközi Megállapodás: Új Kockázatok És Lehetőségek
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">
                  A szakértők szerint a frissen aláírt egyezmény alapjaiban
                  változtathatja meg a globális kereskedelmet és diplomáciát.
                </p>
                <div className="text-sm text-gray-500">
                  Szerző: Kovács Péter | 5 perce
                </div>
              </div>
              01
            </article>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.slice(0, 4 + (oldalSzam - 1) * 4).map((item) => (
                <article
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                  key={item.id}
                >
                  <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-600">
                    {item.picture}
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900 hover:text-blue-600 transition duration-150">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{item.content}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={nextPage}
                ref={triggerRef}
                className="bg-gray-200 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-150"
              >
                További Hírek Betöltése
              </button>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                Legfrissebbek
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-gray-700 hover:text-red-600">
                  <a href="#">- Egy perc alatt összeomlott a tőzsde...</a>
                </li>
                <li className="text-sm text-gray-700 hover:text-red-600">
                  <a href="#">- A titokzatos új vírus feltérképezése</a>
                </li>
                <li className="text-sm text-gray-700 hover:text-red-600">
                  <a href="#">- Interjú az év feltalálójával</a>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border-2 border-yellow-500 p-6 rounded-lg text-center shadow-lg">
              <p className="text-xs font-bold text-yellow-700 uppercase mb-2">
                HIRDETÉS
              </p>
              <h4 className="text-xl font-extrabold text-yellow-800">
                Vegyél Bitcoint!
              </h4>
              <p className="text-sm text-yellow-800 mt-2">
                Ne maradj le a következő nagy dologról!
              </p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition duration-150">
                Kattints Ide!
              </button>
            </div>

            <div className="bg-blue-900 p-8 rounded-lg text-center shadow-2xl">
              <p className="text-xs font-bold text-blue-300 uppercase mb-2">
                SZPONZORÁLT TARTALOM
              </p>
              <h4 className="text-2xl font-extrabold text-white leading-snug">
                Vásárolj Űrhajót Még Ma!
              </h4>
              <p className="text-base text-blue-200 mt-3">
                Részletfizetés is lehetséges. Korlátozott készlet!
              </p>
              <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition duration-150 transform hover:scale-105">
                Tájékozódj!
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                Népszerű Kategóriák
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full hover:bg-red-200 cursor-pointer">
                  #Politika
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-200 cursor-pointer">
                  #Tech
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full hover:bg-green-200 cursor-pointer">
                  #Sport
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full hover:bg-purple-200 cursor-pointer">
                  #Pénz
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full hover:bg-orange-200 cursor-pointer">
                  #Autó
                </span>
              </div>
            </div>
          </aside>
        </main>

        <footer className="bg-gray-800 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2025 Perspektíva. Minden jog fenntartva.</p>
            <div className="mt-2 text-sm space-x-4">
              <a href="#" className="hover:text-white">
                Impresszum
              </a>
              <a href="#" className="hover:text-white">
                Adatvédelem
              </a>
              <a href="#" className="hover:text-white">
                Kapcsolat
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div
        className="absolute top-[50%] left-[50%] w-full h-full bg-gray-900/50 z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ display: isProfileOpen ? "flex" : "none" }}
      >
        <Profile closeProfile={closeProfile} />
      </div>
    </>
  );
}
