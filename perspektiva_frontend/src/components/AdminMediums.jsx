import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function AdminMediums({ mediumId, mediumName }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [processingIds, setProcessingIds] = useState([]);

  useEffect(() => {
    if (!mediumId) return;
    setLoading(true);
    setError(null);
    fetch(
      `/api/mediums/${encodeURIComponent(mediumId)}/articles?status=pending`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch articles");
        return res.json();
      })
      .then((data) => setArticles(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [mediumId]);

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
        `/api/articles/${encodeURIComponent(articleId)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
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

  //   if (!mediumId)
  //     return (
  //       <div>
  //         Please open this page from a medium owner account or provide a mediumId.
  //       </div>
  //     );

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>
        Publisher jelentkezések — {mediumName || mediumId}
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
  mediumId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  mediumName: PropTypes.string,
};
