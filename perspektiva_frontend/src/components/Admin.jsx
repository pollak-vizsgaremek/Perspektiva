import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3300";

  const [users, setUsers] = useState([]);

  const [portals, setPortals] = useState([]);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const totalArticles = portals.reduce(
    (sum, portal) => sum + Number(portal.articles ?? 0),
    0,
  );

  const [publisherApplications, setPublisherApplications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch(`${API_URL}/api/v1/auth/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Admin lekérés sikertelen");
        }
        return res.json();
      })
      .then((data) => {
        setPublisherApplications(data.users || []);
        setUsers(data.users || []);
        console.log(data.users);
        setPortals(data.portals || []);
        setArticles(data.articles || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [API_URL]);

  const handleDeleteUser = (id) => {
    console.log("Törölni kívánt user ID:", id);
    axios.post(
      `${API_URL}/api/v1/auth/userDelete`,
      {
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );
  };
  const handleRejectPublisher = (id) => {
    axios.delete(
      `${API_URL}/api/v1/auth/applicantDelete`,
      {
        data: {
          userId: id,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );
  };
  const handleApprovePublisher = (id) => {
    axios.post(
      `${API_URL}/api/v1/auth/applicantApprove`,
      {
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );
  };

  const handleDeletePortal = (id) => {
    setPortals(portals.filter((portal) => portal.id !== id));
  };

  // const handleApprovePublisher = async (id) => {
  //   setLoading(true);
  //   setError("");
  //   try {
  //     const token = localStorage.getItem("accessToken");
  //     await axios.post(
  //       `${API_URL}/api/publishers/${id}/approve`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );
  //     setPublisherApplications(
  //       publisherApplications.filter((app) => app.id !== id),
  //     );
  //   } catch (err) {
  //     setError(
  //       err.response?.data?.message || "Nem sikerült elfogadni a közzétevőt",
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50">
      <header className="bg-white shadow-md rounded-xl">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center rounded-xl">
          <h1 className="text-3xl font-bold text-red-600">PERSPEKTÍVA</h1>

          <nav className="space-x-6 hidden md:block">
            <a
              href="/Home"
              className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
            >
              Kezdőlap
            </a>
            <a
              href="/Portals"
              className="text-amber-400 hover:text-red-600 font-medium transition duration-150"
            >
              Médiumok
            </a>
            <span className="text-amber-400 font-medium">Admin</span>
          </nav>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150"
          >
            Kijelentkezés
          </button>
        </div>
      </header>

      <main className="flex-1 w-screen overflow-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 mt-8 mx-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Adminisztrációs Felület
          </h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error} {loading && <span className="ml-2">...</span>}
            </div>
          )}

          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-2 rounded-lg font-medium transition duration-150 ${
                activeTab === "overview"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Áttekintés
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-6 py-2 rounded-lg font-medium transition duration-150 ${
                activeTab === "users"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Felhasználók
            </button>
            <button
              onClick={() => setActiveTab("portals")}
              className={`px-6 py-2 rounded-lg font-medium transition duration-150 ${
                activeTab === "portals"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Portálok
            </button>
            <button
              onClick={() => setActiveTab("publisher-applications")}
              className={`px-6 py-2 rounded-lg font-medium transition duration-150 ${
                activeTab === "publisher-applications"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Publisher Jelentkezések
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                  Felhasználók
                </h3>
                <p className="text-4xl font-bold text-blue-600 mt-2">
                  {users.filter((user) => user.deleted === false).length}
                </p>
                <p className="text-xs text-gray-600 mt-2">Aktív felhasználók</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                  Portálok
                </h3>
                <p className="text-4xl font-bold text-green-600 mt-2">
                  {portals.length}
                </p>
                <p className="text-xs text-gray-600 mt-2">Összes portál</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                  Összes Cikk
                </h3>
                <p className="text-4xl font-bold text-purple-600 mt-2">
                  {totalArticles}
                </p>
                <p className="text-xs text-gray-600 mt-2">Publikált cikkek</p>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-red-600 to-red-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Név
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Szerepkör
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Státusz
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Műveletek
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-50 transition duration-150"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {user.role}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              user.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.deleted === false ? "Aktív" : "Inaktív"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-900 hover:bg-red-50 px-3 py-1 rounded transition duration-150"
                          >
                            Törlés
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "portals" && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-red-600 to-red-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Portál
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Kategória
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Cikkek
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Státusz
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                        Műveletek
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {portals.map((portal) => (
                      <tr
                        key={portal.id}
                        className="hover:bg-gray-50 transition duration-150"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {portal.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {portal.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {portal.articles}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              portal.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {portal.status === "active" ? "Aktív" : "Inaktív"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => handleDeletePortal(portal.id)}
                            className="text-red-600 hover:text-red-900 hover:bg-red-50 px-3 py-1 rounded transition duration-150"
                          >
                            Törlés
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "publisher-applications" && (
            <div className="space-y-6">
              {publisherApplications.length === 0 ? (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-2 border-green-300 text-center">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    ✓ Nincsenek függőben lévő jelentkezések
                  </h3>
                  <p className="text-gray-600">
                    Minden publisher jelentkezést feldolgoztál!
                  </p>
                </div>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.accepted === true ? "Accepted" : "Pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleRejectPublisher(user.id)}
                          disabled={loading}
                          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-150 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Elutasítás
                        </button>
                        <button
                          onClick={() => handleApprovePublisher(user.id)}
                          disabled={loading}
                          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-150 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Jóváhagyás
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2026 Perspektíva. Minden jog fenntartva.</p>
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
  );
}
