import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

export default function News({ article, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  // article can be passed as prop or come via location.state.article
  const data = article || location.state?.article || null;

  useEffect(() => {
    // prevent body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    if (typeof onClose === "function") return onClose();
    // if opened via routing with background state, go back, otherwise return to Home
    if (location.state && location.state.background) {
      navigate(-1);
    } else {
      navigate("/Home");
    }
  }

  if (!data) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full mx-4 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            Cikk nem található
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            A kiválasztott cikk adatai nem érhetők el.
          </p>
          <div className="mt-4 text-right">
            <button
              onClick={handleClose}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Bezárás
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={handleClose}
    >
      <article
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between p-6 border-b dark:border-gray-700">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
              {data.source || "Forrás"}
            </span>
            <div className="text-sm text-gray-500 mt-2">{data.date || ""}</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              aria-label="Bezárás"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              Bezárás
            </button>
          </div>
        </header>

        <div className="p-6">
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
            {data.title}
          </h1>
          {data.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {data.excerpt}
            </p>
          )}

          <div className="prose max-w-none dark:prose-invert text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {data.content || "Nincs tartalom."}
          </div>

          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <span className="text-sm text-gray-400 italic">
              #{data.category || "—"}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
