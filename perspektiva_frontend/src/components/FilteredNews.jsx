import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function FilteredNews() {
  useEffect(() => {
    document.title = `Perspektíva — Saját Hírfolyam`;
  }, []);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const [searchTerm, setSearchTerm] = useState("");
  const [activeSources, setActiveSources] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [rssNews, setRssNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rssLoading, setRssLoading] = useState(true);

  const renderQuillContent = (content) => {
    try {
      if (!content) return "";
      if (typeof content === "string" && content.trim().startsWith("{")) {
        const delta = JSON.parse(content);
        if (delta.ops && Array.isArray(delta.ops)) {
          return delta.ops
            .map((op) =>
              typeof op.insert === "string" ? op.insert : "",
            )
            .join("")
            .replace(/\n{2,}/g, "\n\n")
            .trim();
        }
      }
      return typeof content === "string" ? content : "";
    } catch (err) {
      console.warn("Error parsing Quill content:", err);
      return typeof content === "string" ? content : "";
    }
  };

  useEffect(() => {
    const storedSources = localStorage.getItem("sources");
    if (storedSources) {
      const sources = JSON.parse(storedSources);
      const active = sources
        .filter((source) => source.active)
        .map((source) => source.name);
      setActiveSources(active);
    }
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_URL}/api/articles`);
        const articles = await response.json();

        // Map articles to include medium info
        const mappedArticles = articles.map((article) => {
          const createdAtValue = article.createdAt ?? article.created_At;
          const dateValue = createdAtValue
            ? (() => {
                try {
                  let date;
                  if (typeof createdAtValue === "string") {
                    date = new Date(createdAtValue);
                  } else if (typeof createdAtValue === "number") {
                    date = new Date(createdAtValue * 1000);
                  } else if (createdAtValue instanceof Date) {
                    date = createdAtValue;
                  } else {
                    return "N/A";
                  }
                  return Number.isNaN(date.getTime()) ? "N/A" : date.toLocaleString("hu-HU");
                } catch {
                  return "N/A";
                }
              })()
            : "N/A";

          const parsedContent = renderQuillContent(article.content);
          return {
            id: article.id,
            source: article.publicist?.mediums?.name || "Unknown",
            title: article.title,
            excerpt:
              parsedContent.length > 0
                ? `${parsedContent.slice(0, 150)}...`
                : "",
            date: dateValue,
            category: article.tag || "Cikk",
          };
        });

        setAllNews(mappedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [API_URL]);

  useEffect(() => {
    const fetchRssItems = async () => {
      if (activeSources.length === 0) {
        setRssNews([]);
        setRssLoading(false);
        return;
      }

      setRssLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/mediums/rss`);
        const items = await response.json();

        const mappedRss = items
          .filter((item) => activeSources.includes(item.source))
          .map((item) => ({
            id: item.id,
            source: item.source,
            title: item.title,
            excerpt: (item.content || "").substring(0, 150) + "...",
            date: item.pubDate || item.date || "N/A",
            category: item.category || "RSS",
          }));

        setRssNews(mappedRss);
      } catch (error) {
        console.error("Failed to fetch RSS items:", error);
        setRssNews([]);
      } finally {
        setRssLoading(false);
      }
    };

    fetchRssItems();
  }, [API_URL, activeSources]);

  const searchLower = searchTerm.toLowerCase();
  const mergedNews = [...allNews, ...rssNews];
  const filteredNews = mergedNews.filter(
    (news) =>
      activeSources.includes(news.source) &&
      (news.title.toLowerCase().includes(searchLower) ||
        news.excerpt.toLowerCase().includes(searchLower) ||
        news.category.toLowerCase().includes(searchLower) ||
        news.source.toLowerCase().includes(searchLower)),
  );

  function backToPortalFilters() {
    navigate("/Portals");
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-500">
            Saját Hírfolyam
          </h1>
          <input
            type="text"
            id="sourceSearch"
            placeholder="Keresés cím vagy kategória alapján..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />

          <div className="flex flex-wrap gap-2">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
              onClick={() => navigate("/Home")}
            >
              Kezdőlap
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
              onClick={backToPortalFilters}
            >
              Vissza
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
        {/*mobilom 1, közepes mérettől (md) 2 oszlop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading || rssLoading ? (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl">Cikkek betöltése...</p>
            </div>
          ) : filteredNews.length > 0 ? (
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
                    {news.category}
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
