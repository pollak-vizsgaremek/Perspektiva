import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, name: "János Kovács", email: "janos@example.com", role: "user", status: "active" },
    { id: 2, name: "Márta Szabó", email: "marta@example.com", role: "moderator", status: "active" },
    { id: 3, name: "Péter Nagy", email: "peter@example.com", role: "user", status: "inactive" },
  ]);

  const [portals, setPortals] = useState([
    { id: 1, name: "Hírek24", category: "news", articles: 145, status: "active" },
    { id: 2, name: "Techvilág", category: "technology", articles: 89, status: "active" },
    { id: 3, name: "Sportinfo", category: "sports", articles: 234, status: "inactive" },
  ]);

  const [publisherApplications, setPublisherApplications] = useState([
    { id: 1, name: "Szabó Gábor", email: "szabo.gabor@example.com", portalName: "Tech Hírek Napi", category: "technology", description: "Szeretnék tech híreket publikálni", appliedDate: "2026-04-08", status: "pending" },
    { id: 2, name: "Kiss Erzsébet", email: "kiss.erzsebet@example.com", portalName: "Gazdaság MA", category: "economics", description: "Gazdasági hírekre szeretnék fókuszálni", appliedDate: "2026-04-07", status: "pending" },
    { id: 3, name: "Nagy László", email: "nagy.laszlo@example.com", portalName: "Sportvilág", category: "sports", description: "Sport szenvedély és gazdálkodási tapasztalat", appliedDate: "2026-04-06", status: "pending" },
  ]);

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleDeletePortal = (id) => {
    setPortals(portals.filter(portal => portal.id !== id));
  };

  const handleApprovePublisher = (id) => {
    setPublisherApplications(publisherApplications.filter(app => app.id !== id));
  };

  const handleRejectPublisher = (id) => {
    setPublisherApplications(publisherApplications.filter(app => app.id !== id));
  };

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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Adminisztrációs Felület</h2>
          
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
              Publisher Jelentkezések ({publisherApplications.length})
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Felhasználók</h3>
                <p className="text-4xl font-bold text-blue-600 mt-2">{users.length}</p>
                <p className="text-xs text-gray-600 mt-2">Aktív felhasználók</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Portálok</h3>
                <p className="text-4xl font-bold text-green-600 mt-2">{portals.length}</p>
                <p className="text-xs text-gray-600 mt-2">Összes portál</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Összes Cikk</h3>
                <p className="text-4xl font-bold text-purple-600 mt-2">{portals.reduce((sum, p) => sum + p.articles, 0)}</p>
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
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Név</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Szerepkör</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Státusz</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Műveletek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {users.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50 transition duration-150">
                        <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{user.role}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === "active" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {user.status === "active" ? "Aktív" : "Inaktív"}
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
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Portál</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Kategória</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Cikkek</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Státusz</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Műveletek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {portals.map(portal => (
                      <tr key={portal.id} className="hover:bg-gray-50 transition duration-150">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{portal.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{portal.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{portal.articles}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            portal.status === "active" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
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
                  <h3 className="text-xl font-semibold text-green-700 mb-2">✓ Nincsenek függőben lévő jelentkezések</h3>
                  <p className="text-gray-600">Minden publisher jelentkezést feldolgoztál!</p>
                </div>
              ) : (
                publisherApplications.map(app => (
                  <div key={app.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md border-l-4 border-blue-500 p-6 hover:shadow-lg transition duration-150">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{app.portalName}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-semibold">Jelentkező:</span> {app.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Email:</span> {app.email}
                        </p>
                      </div>
                      <span className="inline-block px-4 py-2 bg-indigo-200 text-indigo-800 rounded-full text-xs font-semibold">
                        {app.category}
                      </span>
                    </div>

                    <div className="bg-white rounded-lg p-4 my-4 border border-gray-200">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">Leírás:</span>
                      </p>
                      <p className="text-sm text-gray-600 mt-2 italic">\"{app.description}\"</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500">
                        Módosítva: <span className="font-semibold">{app.appliedDate}</span>
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleRejectPublisher(app.id)}
                          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-150 font-medium"
                        >
                          Elutasítás
                        </button>
                        <button
                          onClick={() => handleApprovePublisher(app.id)}
                          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-150 font-medium"
                        >
                          Jóváhagyás
                        </button>
                      </div>
                    </div>
                  </div>
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