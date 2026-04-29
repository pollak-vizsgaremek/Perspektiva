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
          mediumId || data?.publicist?.medium_id || data?.publicist?.mediumId,
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
  }, [API_URL, mediumId, navigate]);

  useEffect(() => {
    if (!resolvedMediumId || !authorized) return;
    setLoading(true);
    setError(null);

    fetch(
      `${API_URL}/api/mediums/${encodeURIComponent(
        resolvedMediumId,
      )}/articles?status=pending`,
      {
        headers: {
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => setArticles(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [API_URL, authorized, resolvedMediumId]);

  const setProcessing = (id, val) =>
    setProcessingIds((prev) =>
      val ? [...prev, id] : prev.filter((x) => x !== id),
    );

  const updateStatus = async (articleId, status) => {
    if (!articleId) return;
    setError(null);
    setProcessing(articleId, true);
    try {
      const res = await fetch(
        `${API_URL}/api/articles/${encodeURIComponent(articleId)}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ status }),
        },
      );
      if (!res.ok) throw new Error("Failed to update article status");
      setArticles((prev) =>
        prev.filter((a) => String(a.id) !== String(articleId)),
      );
    } catch (err) {
      setError(err.message || "Update failed");
    } finally {
      setProcessing(articleId, false);
    }
  };

  const handleDisallow = (id) => {
    if (!window.confirm("Are you sure you want to disallow this submission?"))
      return;
    updateStatus(id, "rejected");
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Publisher jelentkezések — {mediumName || resolvedMediumId}
      </h2>

      {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}

      {loading ? (
        <div>Loading pending submissions…</div>
      ) : articles.length === 0 ? (
        <div>No pending submissions for this medium.</div>
      ) : (
        <div
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#fafafa",
              padding: "10px 12px",
              fontWeight: 600,
            }}
          >
            <div style={{ flex: 3 }}>Title</div>
            <div style={{ flex: 2 }}>Author</div>
            <div style={{ flex: 1 }}>Submitted</div>
            <div style={{ flex: 4 }}>Excerpt</div>
            <div style={{ width: 170 }}>Actions</div>
          </div>

          {articles.map((a) => (
            <div
              key={a.id}
              style={{
                display: "flex",
                padding: "12px",
                borderTop: "1px solid #f0f0f0",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: 3 }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{a.title}</div>
                {a.tags && a.tags.length > 0 && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "#666",
                      marginTop: 6,
                    }}
                  >
                    {a.tags.join(", ")}
                  </div>
                )}
              </div>

              <div style={{ flex: 2, fontSize: 13, color: "#333" }}>
                {a.authorName || a.author || "Unknown"}
                {a.authorEmail && (
                  <div style={{ fontSize: 12, color: "#666" }}>
                    {a.authorEmail}
                  </div>
                )}
              </div>

              <div style={{ flex: 1, fontSize: 12, color: "#666" }}>
                {formatDate(a.createdAt || a.submittedAt)}
              </div>

              <div style={{ flex: 4, fontSize: 13, color: "#444" }}>
                {a.excerpt ||
                  (a.content ? `${String(a.content).slice(0, 220)}…` : "")}
              </div>

              <div style={{ width: 170 }}>
                <button
                  onClick={() => updateStatus(a.id, "approved")}
                  disabled={processingIds.includes(a.id)}
                  style={{ marginRight: 8 }}
                >
                  {processingIds.includes(a.id) ? "..." : "Allow"}
                </button>
                <button
                  onClick={() => handleDisallow(a.id)}
                  disabled={processingIds.includes(a.id)}
                  style={{ background: "#fff", border: "1px solid #ddd" }}
                >
                  Disallow
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

AdminMediums.propTypes = {
  mediumId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mediumName: PropTypes.string,
};
