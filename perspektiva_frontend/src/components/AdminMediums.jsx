import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function AdminMediums({ mediumId, mediumName }) {
  const [userData, setUserData] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [resolvedMediumId, setResolvedMediumId] = useState(mediumId);
  const [error, setError] = useState(null);
  const [processingIds, setProcessingIds] = useState([]);

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const verifyAccess = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("You must be signed in to access this page.");
        setAuthLoading(false);
        navigate("/Home", { replace: true });
        return;
      }

      try {
        const res = await fetch(`${API_URL}/api/user/me`, {
          headers: {
            authorization: "Bearer " + token,
          },
        });

        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        const data = await res.json();
        const isChiefEditor =
          data?.publicist?.isChiefEditor === 1 ||
          data?.publicist?.isChiefEditor === true;
        const isAccepted =
          data?.publicist?.accepted === 1 ||
          data?.publicist?.accepted === true;

        if (!isChiefEditor || !isAccepted) {
          throw new Error("Access denied");
        }

        setUserData(data);
        setResolvedMediumId(
          data?.publicist?.medium_id || data?.publicist?.mediumId,
        );
        setAuthorized(true);
      } catch (err) {
        setError(
          "Csak elfogadott főszerkesztők tekinthetik meg ezt az oldalt. Átirányítás a főoldalra.",
        );
        setAuthorized(false);
        toast.error(
          "Csak elfogadott főszerkesztők tekinthetik meg ezt az oldalt. Átirányítás a főoldalra.",
        );
        navigate("/Home", { replace: true });
      } finally {
        setAuthLoading(false);
      }
    };

    verifyAccess();
  }, [API_URL, navigate]);

  useEffect(() => {
    if (!resolvedMediumId || !authorized) return;
    setLoading(true);
    setError(null);

    fetch(`${API_URL}/api/articles`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => {
        const articlesForMedium = Array.isArray(data)
          ? data.filter((article) => {
              const articleMediumId =
                article.publicist?.mediums?.id || article.publicist?.medium_id;
              return String(articleMediumId) === String(resolvedMediumId);
            })
          : [];
        setArticles(articlesForMedium);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message || "Unknown error");
      })
      .finally(() => setLoading(false));
  }, [API_URL, authorized, resolvedMediumId]);

  const setProcessing = (id, val) =>
    setProcessingIds((prev) =>
      val ? [...prev, id] : prev.filter((x) => x !== id),
    );

  const deleteArticle = async (articleId) => {
    if (!articleId) return;
    setError(null);
    setProcessing(articleId, true);
    try {
      const res = await fetch(`${API_URL}/api/articles`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ Article_id: articleId }),
      });

      if (!res.ok) throw new Error("Failed to delete article");
      setArticles((prev) => prev.filter((a) => String(a.id) !== String(articleId)));
    } catch (err) {
      setError(err.message || "Delete failed");
    } finally {
      setProcessing(articleId, false);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm("Biztosan törölni szeretnéd ezt a cikket?")) return;
    deleteArticle(id);
  };

  const renderQuillContent = (content) => {
    try {
      if (!content) return "";
      if (typeof content === "string" && content.trim().startsWith("{")) {
        const delta = JSON.parse(content);
        if (delta.ops && Array.isArray(delta.ops)) {
          return delta.ops
            .map((op) =>
              typeof op.insert === "string"
                ? op.insert
                : op.insert?.image
                ? ""
                : "",
            )
            .join("")
            .replace(/\n{2,}/g, "\n\n");
        }
      }
      return typeof content === "string" ? content : "";
    } catch (err) {
      console.warn("Error parsing Quill content:", err);
      return "";
    }
  };

  const formatDate = (iso) => {
    try {
      const d = new Date(iso);
      return isNaN(d.getTime()) ? "" : d.toLocaleString();
    } catch {
      return "";
    }
  };

  if (authLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div>Loading access rights…</div>
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white shadow-lg rounded-3xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 bg-red-600 sm:px-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Publisher jelentkezések
            </h2>
            <p className="text-sm text-red-100 mt-1">
              {mediumName || articles[0]?.publicist?.mediums?.name || `Medium #${resolvedMediumId}`}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
            <span className="font-semibold">Cikkek:</span>
            <span>{articles.length}</span>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-8">
          {error && (
            <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {loading ? (
            <div className="rounded-2xl border border-dashed border-gray-200 px-6 py-10 text-center text-gray-500">
              Loading submissions…
            </div>
          ) : articles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 px-6 py-10 text-center text-gray-500">
              Nincsenek cikkek ehhez a médiumhoz.
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map((a) => (
                <div
                  key={a.id}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3 lg:flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {a.title}
                          </h3>
                          {a.tags && a.tags.length > 0 && (
                            <p className="mt-2 text-sm text-gray-500">
                              {a.tags.join(", ")}
                            </p>
                          )}
                        </div>
                        <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 ring-1 ring-gray-200">
                          {formatDate(a.createdAt || a.submittedAt) || "Ismeretlen dátum"}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                        <div>
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            {a.excerpt ||
                              (a.content ? `${String(renderQuillContent(a.content)).slice(0, 240)}…` : "Nincs tartalom")}
                          </p>
                        </div>
                        <div className="rounded-3xl bg-white px-4 py-3 text-sm text-gray-600 ring-1 ring-gray-200">
                          <div className="font-semibold text-gray-900">
                            {a.publicist?.name || a.authorName || a.author || "Ismeretlen szerző"}
                          </div>
                          {a.publicist?.user?.email ? (
                            <div className="text-xs text-gray-500">
                              {a.publicist.user.email}
                            </div>
                          ) : a.authorEmail ? (
                            <div className="text-xs text-gray-500">
                              {a.authorEmail}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-3 pt-3 lg:pt-0">
                      <button
                        onClick={() => handleDelete(a.id)}
                        disabled={processingIds.includes(a.id)}
                        className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {processingIds.includes(a.id) ? "Törlés…" : "Törlés"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

AdminMediums.propTypes = {
  mediumId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mediumName: PropTypes.string,
};
