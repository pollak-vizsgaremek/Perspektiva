import { useEffect, useState, useRef, useCallback } from "react";
import { useIntersection } from "../hooks/useIntersection";
import { useNavigate, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import Login from "./Login";
import News from "./News";
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- GEMINI KONFIGURÁCIÓ ---
// Ide írd be a saját API kulcsodat: https://aistudio.google.com/
const genAI = new GoogleGenerativeAI("AIzaSyBqMy5RFyZ8Cob7dHKwgqSL8y6zfPN8tow");

export default function Home() {
  useEffect(() => {
    document.title = `Perspektíva`;
  }, []);
  const [article, setArticle] = useState([]);
  const [oldalSzam, setOldalSzam] = useState(1);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [userData, setUserData] = useState(null);
  const [rssItems, setRssItems] = useState([]);
  const [tags, setTags] = useState([]);
  const [savingFavouriteIds, setSavingFavouriteIds] = useState([]);
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toast) {
      toast(location.state.toast);
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  }, [location.state]);

  const formatSource = (item) => {
    if (item.source) return item.source;
    try {
      return new URL(item.link).hostname.replace(/^www\./, "");
    } catch {
      return "Ismeretlen forrás";
    }
  };

  const renderQuillContent = (content) => {
    // Parse Quill Delta JSON and extract text for preview
    try {
      if (!content) return "";
      if (typeof content === "string" && content.startsWith("{")) {
        const delta = JSON.parse(content);
        if (delta.ops && Array.isArray(delta.ops)) {
          // Extract text from Delta ops
          return delta.ops
            .map((op) => (typeof op.insert === "string" ? op.insert : ""))
            .join("")
            .slice(0, 150); // First 150 chars as preview
        }
      }
      // Fallback to plain text content
      return typeof content === "string" ? content.slice(0, 150) : "";
    } catch (err) {
      console.warn("Error parsing Quill content:", err);
      return "";
    }
  };

  const isValidImageUrl = (url) =>
    typeof url === "string" &&
    (url.startsWith("data:image/") ||
      /\.(?:jpe?g|png|gif|bmp|webp|svg|avif|apng)(?:[?#].*)?$/i.test(url));

  const getArticleImage = (item) => {
    if (item.rss) return item.image;
    if (item.image_base64) {
      return item.image_base64.startsWith("data:image/")
        ? item.image_base64
        : `data:image/jpeg;base64,${item.image_base64}`;
    }
    return item.image;
  };

  const shuffleArray = (array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const [mixedItems, setMixedItems] = useState([]);

  useEffect(() => {
    const combined = [...article, ...rssItems];
    setMixedItems(shuffleArray(combined));
  }, [article, rssItems]);

  // --- WORDLE STATE-EK ---
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // --- HÍREK LEKÉRÉSE (Eredeti kódodból) ---
  function getarticle() {
    fetch(`${API_URL}/api/articles`).then(async (res) => {
      const data = await res.json();
      const normalized = Array.isArray(data)
        ? data.map((article) => {
            if (article.image_base64) {
              const imageSrc = article.image_base64.startsWith("data:image/")
                ? article.image_base64
                : `data:image/jpeg;base64,${article.image_base64}`;
              return {
                ...article,
                image: imageSrc,
                rss: false,
              };
            }
            return { ...article, rss: false };
          })
        : [];
      setArticle(normalized);
      console.log("Cikkek betöltve:", normalized);
    });
  }

  // --- RSS TARTALMAK LEKÉRÉSE ---
  async function getRssItems() {
    try {
      const res = await fetch(`${API_URL}/api/mediums/rss`);
      if (!res.ok) {
        console.error("RSS fetch failed:", res.status, res.statusText);
        return;
      }
      const data = await res.json();
      console.log("RSS items loaded:", data.length);
      setRssItems(data);
    } catch (error) {
      console.error("RSS fetch error:", error);
    }
  }

  async function getTags() {
    try {
      const res = await fetch(`${API_URL}/api/tags`);
      if (!res.ok) {
        console.error("Tags fetch failed:", res.status, res.statusText);
        return;
      }
      const data = await res.json();
      console.log("Tags loaded:", data.length);
      setTags(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Tags fetch error:", error);
    }
  }
  const saveFavourite = async (articleId) => {
    if (!articleId || savingFavouriteIds.includes(articleId)) return;
    if (!isLoggedIn) {
      toast.info("Jelentkezz be a kedvencekhez adáshoz.");
      return;
    }

    setSavingFavouriteIds((prev) => [...prev, articleId]);

    try {
      const res = await fetch(`${API_URL}/api/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ article_id: articleId }),
      });

      if (res.status === 409) {
        toast.info("A cikk már a kedvenceid között van.");
        return;
      }
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Hiba történt.");
      }

      toast.success("Cikk hozzáadva a kedvencekhez.");
    } catch (err) {
      console.error("Save favourite failed:", err);
      toast.error("Nem sikerült kedvenccé tenni a cikket.");
    } finally {
      setSavingFavouriteIds((prev) => prev.filter((id) => id !== articleId));
    }
  };
  // --- GEMINI SZÓGENERÁLÁS ---
  const fetchNewWord = useCallback(async () => {
    try {
      // Itt a módosítás: használjuk a v1 API-t a Gemini modellhez
      const model = genAI.getGenerativeModel(
        { model: "gemini-1.5-flash-latest" },
        { apiVersion: "v1" },
      );
      const prompt =
        "Adj egy véletlenszerű, gyakori 5 betűs MAGYAR főnevet egy wordle játékhoz. Csak a szót küldd el, csupa nagybetűvel, írásjelek nélkül.";

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const word = text.trim().toUpperCase();

      console.log("Kapott szó:", word); // Nézzük meg a konzolban, mit kaptunk

      if (word.length === 5) {
        setSolution(word);
      } else {
        // Ha túl hosszú választ kapunk, keressük meg benne az első 5 betűs szót
        const match = word.match(/[A-ZÁÉÍÓÖŐÚÜŰ]{5}/);
        setSolution(match ? match[0] : "HÍREK");
      }
    } catch (error) {
      console.error("Gemini hiba részletesen:", error);
      setSolution("ALMAA");
    }
  }, []);

  // --- WORDLE JÁTÉKMENET ---
  const handleKeyUp = useCallback(
    (e) => {
      if (gameOver || !solution) return;

      if (e.key === "Enter") {
        if (currentGuess.length !== 5) return;

        const newGuesses = [...guesses];
        newGuesses[turn] = currentGuess.toUpperCase();
        setGuesses(newGuesses);

        if (currentGuess.toUpperCase() === solution || turn === 5) {
          setGameOver(true);
        }

        setTurn(turn + 1);
        setCurrentGuess("");
      }

      if (e.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (
        /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]$/.test(e.key) &&
        currentGuess.length < 5
      ) {
        setCurrentGuess((prev) => prev + e.key.toUpperCase());
      }
    },
    [currentGuess, gameOver, solution, turn, guesses],
  );

  // Effektusok
  useEffect(() => {
    getarticle();
    getRssItems();
    getTags();
    fetchNewWord();
  }, [fetchNewWord]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    if (isVisible) {
      setOldalSzam((prev) => {
        const maxPage = Math.ceil(mixedItems.length / 4);
        return maxPage > prev ? prev + 1 : prev;
      });
    }
  }, [isVisible, mixedItems.length]);

  useEffect(() => {
    const getToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!getToken);
  }, []);

  // fetch current user details (to check publicist.accepted)
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;
        const res = await fetch(`${API_URL}/api/user/me`, {
          headers: { authorization: "Bearer " + token },
        });
        if (!res.ok) return;
        const data = await res.json();
        console.log(data);

        setUserData(data);
      } catch (_) {
        // ignore
      }
    };
    fetchMe();
  }, [API_URL]);

  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    setIsLoginOpen(true);
  };

  function openArticle(item) {
    setSelectedArticle(item);
    setIsNewsOpen(true);
  }

  const closeNews = () => {
    setIsNewsOpen(false);
    setSelectedArticle(null);
  };

  const handleLoadMore = () => {
    const maxPage = Math.ceil(mixedItems.length / 4);
    if (oldalSzam < maxPage) {
      setOldalSzam((s) => s + 1);
      return;
    }
    toast.info("Nincs több betölthető hír.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
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
                className="text-amber-400 hover:text-red-600 font-medium transition duration-150 active"
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
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                {userData?.publicist?.isChiefEditor === 1 ||
                userData?.publicist?.isChiefEditor === true ? (
                  <button
                    onClick={() => navigate("/AdminMediums")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
                  >
                    Médium admin
                  </button>
                ) : null}
                {userData?.publicist?.accepted === 1 ||
                userData?.publicist?.accepted === true ? (
                  <button
                    onClick={() => navigate("/ArticleCreation")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
                  >
                    Új cikk
                  </button>
                ) : null}
                <button
                  onClick={openProfile}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
                >
                  Profil
                </button>
              </div>
            ) : (
              <button
                onClick={openLogin}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
              >
                Login
              </button>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Kiemelt hír */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-40">
              <div className="md:w-3/3">
                <div className=" h-full bg-red-200 flex items-center justify-center text-red-700 font-bold">
                  AKTUÁLIS HÍREK
                </div>
              </div>
            </article>

            {/* Hírfolyam */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mixedItems.slice(0, 4 + (oldalSzam - 1) * 4).map((item) => (
                <article
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                  key={item.id}
                >
                  <div className="h-40 overflow-hidden bg-gray-100">
                    {(() => {
                      const imageSrc = getArticleImage(item);
                      if (isValidImageUrl(imageSrc)) {
                        return (
                          <img
                            src={imageSrc}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        );
                      }
                      if (item.picture) {
                        return (
                          <div className="h-full bg-gray-300 flex items-center justify-center text-gray-600">
                            {item.picture}
                          </div>
                        );
                      }
                      return (
                        <div className="h-full bg-red-100 flex items-center justify-center text-red-600 text-4xl">
                          📰
                        </div>
                      );
                    })()}
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                      {item.category || item.source}
                    </span>
                    <h3 className="mt-1">
                      <button
                        type="button"
                        onClick={() => openArticle(item)}
                        className="w-full text-left block text-lg font-semibold text-white hover:text-red-600 transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                      >
                        <span className="truncate block">{item.title}</span>
                      </button>
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {renderQuillContent(item.content)}
                    </p>
                    {item.source && (
                      <div className="mt-4 text-xs text-gray-500">
                        <div>Forrás: {formatSource(item)}</div>
                      </div>
                    )}
                    {!item.rss && isLoggedIn && (
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <button
                          onClick={() => saveFavourite(item.id)}
                          disabled={savingFavouriteIds.includes(item.id)}
                          className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {savingFavouriteIds.includes(item.id)
                            ? "Mentés…"
                            : "Mentés a kedvencekhez"}
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleLoadMore}
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

            {/* --- ITT A WORDLE JÁTÉK A BITCOIN HELYÉN --- */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-2xl border-2 border-red-600/20">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-black text-white tracking-tighter">
                  MINI WORDLE
                </h4>
                <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded uppercase font-bold">
                  AI Gen
                </span>
              </div>

              <div className="grid grid-rows-6 gap-1.5 mb-4">
                {guesses.map((guess, i) => (
                  <WordleRow
                    key={i}
                    guess={i === turn ? currentGuess : guess}
                    isFinal={i < turn}
                    solution={solution}
                  />
                ))}
              </div>

              {gameOver && (
                <div className="text-center p-3 bg-red-600 rounded-lg animate-bounce">
                  <p className="text-white text-sm font-bold">
                    {guesses.includes(solution)
                      ? "Gratulálunk! 🎉"
                      : `Vége! A szó: ${solution}`}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-[10px] text-white underline mt-1 block w-full"
                  >
                    Új játék
                  </button>
                </div>
              )}
              {!gameOver && !solution && (
                <p className="text-center text-[10px] text-gray-500 animate-pulse">
                  Szó betöltése...
                </p>
              )}
            </div>
            {/* --- WORDLE VÉGE --- */}

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                Népszerű Kategóriák
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.length > 0 ? (
                  tags.map((tag) => (
                    <span
                      key={tag.tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-red-100 cursor-pointer"
                    >
                      {tag.tag}
                    </span>
                  ))
                ) : (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    Nincsenek betöltött kategóriák
                  </span>
                )}
              </div>
            </div>
          </aside>
        </main>

        <footer className="bg-gray-800 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2025 Perspektíva. Minden jog fenntartva.</p>
          </div>
        </footer>
      </div>
      <ToastContainer />

      {isLoggedIn && isProfileOpen && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <Profile closeProfile={closeProfile} onLogout={handleLogout} openArticle={openArticle} />
        </div>
      )}

      {!isLoggedIn && isLoginOpen && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <Login closeLogin={closeLogin} />
        </div>
      )}

      {isNewsOpen && selectedArticle && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <News article={selectedArticle} onClose={closeNews} />
        </div>
      )}
    </>
  );
}

// Segédkomponens a Wordle sorokhoz
function WordleRow({ guess, isFinal, solution }) {
  const cells = Array(5).fill("");
  return (
    <div className="grid grid-cols-5 gap-1.5">
      {cells.map((_, i) => {
        const char = guess[i] || "";
        let bgColor = "border-gray-700 bg-gray-800";
        if (isFinal) {
          if (char === solution[i]) bgColor = "bg-green-600 border-green-600";
          else if (solution.includes(char))
            bgColor = "bg-yellow-600 border-yellow-600";
          else bgColor = "bg-gray-600 border-gray-600 opacity-40";
        }
        return (
          <div
            key={i}
            className={`h-8 w-full border flex items-center justify-center text-sm font-bold text-white rounded transition-colors duration-500 ${bgColor}`}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
}
