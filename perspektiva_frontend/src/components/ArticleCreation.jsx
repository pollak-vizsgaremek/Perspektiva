import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function ArticleCreation() {
  useEffect(() => {
    document.title = `Perspektíva — Új Cikk`;
  }, []);
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3300";
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [publicistId, setPublicistId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch current user (and set default publicistId) on mount
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch(`${API_URL}/api/user/me`, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          // silently ignore if no auth / not logged in
          return;
        }
        const data = await res.json();
        setUserData(data);
        // try several possible shapes to extract an id/publicist id
        const idCandidate =
          (data && (data.id || data.userId || data.user?.id)) ||
          (data && data.publicist?.id) ||
          (data && data.publicistId);
        if (idCandidate) setPublicistId(String(idCandidate));
      } catch (err) {
        console.error("Failed to fetch /api/user/me:", err);
      }
    };

    fetchMe();
  }, [API_URL]);

  function validate() {
    if (!title.trim()) return "Cím megadása kötelező.";
    if (!content.trim()) return "Tartalom megadása kötelező.";
    return "";
  }

  async function handleSubmit(e) {
    e?.preventDefault();
    setError("");
    setSuccess("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    // determine publicist id from authenticated user if available
    const pidCandidate =
      userData?.publicist?.id ??
      userData?.id ??
      (publicistId ? Number(publicistId) : null);
    if (!pidCandidate) {
      setError("Publicista nem található. Jelentkezz be a folytatáshoz.");
      return;
    }

    const payload = {
      publicistId: Number(pidCandidate),
      title: title.trim(),
      content: content.trim(),
    };

    try {
      setSaving(true);
      const res = await fetch(`${API_URL}/api/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.log(res);
        const txt = await res.text();
        throw new Error(txt || "Szerverhiba");
      }

      const created = await res.json();
      setSuccess("Cikk létrehozva.");
      setTitle("");
      setContent("");
      // rövid visszairányítás a főoldalra
      toast("Sikeres létrehozás!");
    } catch (err) {
      setError("Mentési hiba: " + (err.message || err.toString()));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">Új Cikk</h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/Home")}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Mégse
            </button>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-60 transition"
            >
              Mentés
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-gray-700">Cím</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Írd ide a cikk címét..."
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Tartalom
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                placeholder="Írd ide a cikk teljes tartalmát..."
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
              />
            </div>

            {/* Publicist info (read-only, comes from userData) */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Publicista
              </label>
              <div className="mt-2 p-3 border border-gray-200 rounded-lg bg-gray-50 text-sm text-gray-700">
                {userData?.publicist?.name ||
                  userData?.name ||
                  `Publicist ID: ${publicistId || "—"}`}
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600 font-medium">{error}</div>
            )}
            {success && (
              <div className="text-sm text-green-600 font-medium">
                {success}
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={saving}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-60 transition"
              >
                {saving ? "Mentés..." : "Mentés és közzététel"}
              </button>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Előnézet</h3>
              <article className="rounded-lg overflow-hidden border">
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {userData?.publicist?.name ||
                      userData?.name ||
                      `Publicist: ${publicistId || "—"}`}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mt-3 mb-3 line-clamp-2">
                    {title || "Cím még nincs"}
                  </h2>
                </div>
              </article>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-sm font-bold text-gray-700 mb-2">Tippek</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Használj rövid, informatív címet.</li>
                <li>
                  - Legalább néhány bekezdés a tartalomban jobb megjelenésért.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
