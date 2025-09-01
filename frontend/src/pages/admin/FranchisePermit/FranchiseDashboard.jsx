
import { useEffect, useState } from "react";

export default function FranchiseDashboard() {
  const [franchises, setFranchises] = useState([]);

  useEffect(() => {
    fetch("/api/franchisepermit/franchises")
      .then((res) => res.json())
      .then(setFranchises)
      .catch((err) => console.error("Franchise Permit Service error:", err));
  }, []);

  // KPI counters
  const total = franchises.length;
  const approved = franchises.filter((f) => f.status === "Approved").length;
  const pending = franchises.filter((f) => f.status === "Pending").length;
  const rejected = franchises.filter((f) => f.status === "Rejected").length;

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      case "Rejected":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Franchise Permits Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Overview of franchise permit applications
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-blue-800 text-sm font-medium">Total Permits</p>
          <p className="text-blue-900 text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-green-800 text-sm font-medium">Approved</p>
          <p className="text-green-900 text-2xl font-bold">{approved}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-yellow-800 text-sm font-medium">Pending</p>
          <p className="text-yellow-900 text-2xl font-bold">{pending}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <p className="text-red-800 text-sm font-medium">Rejected</p>
          <p className="text-red-900 text-2xl font-bold">{rejected}</p>
        </div>
      </div>

..., [02/09/2025 12:28 am]
{/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-slate-800 shadow rounded-lg">
          <thead className="bg-gray-50 dark:bg-slate-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Operator
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {franchises.map((f) => (
              <tr
                key={f.id}
                className="hover:bg-gray-50 dark:hover:bg-slate-700/50"
              >
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                  {f.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {f.operator}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      f.status
                    )}`}
                  >
                    {f.status}
                  </span>
                </td>
              </tr>
            ))}
            {franchises.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No franchise permits found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}