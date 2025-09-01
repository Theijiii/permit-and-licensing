
import { useEffect } from "react";

export default function BusAppDash() {
  const [businessPermits, setBusinessPermits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/businesspermit/business")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setBusinessPermits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Business Permit Service error:", err);
        setError("Failed to load business permits.");
        setLoading(false);
      });
  }, []);

  // Dashboard stats
  const totalPermits = businessPermits.length;
  const approvedPermits = businessPermits.filter(p => p.permit?.status === "Approved").length;
  const pendingPermits = businessPermits.filter(p => p.permit?.status === "Pending").length;
  const rejectedPermits = businessPermits.filter(p => p.permit?.status === "Rejected").length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Business Permits Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Permits</h2>
          <p className="text-2xl font-bold">{totalPermits}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Approved</h2>
          <p className="text-2xl font-bold">{approvedPermits}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl font-bold">{pendingPermits}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Rejected</h2>
          <p className="text-2xl font-bold">{rejectedPermits}</p>
        </div>
      </div>

      {/* Table */}
      {loading && <p>Loading permits...</p>}
      {error && <div className="mb-4 text-red-600"><strong>{error}</strong></div>}
      {!loading && businessPermits.length === 0 && <p>No business permits available.</p>}

      {!loading && businessPermits.length > 0 && (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">Business Name</th>
              <th className="border px-2 py-1">Owner</th>
              <th className="border px-2 py-1">City</th>
              <th className="border px-2 py-1">Barangay</th>
              <th className="border px-2 py-1">Permit No.</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {businessPermits.map((p) => (
              <tr key={p.id}>
                <td className="border px-2 py-1">{p.businessName}</td>
                <td className="border px-2 py-1">{p.ownerName}</td>
                <td className="border px-2 py-1">{p.city}</td>
                <td className="border px-2 py-1">{p.barangay}</td>
                <td className="border px-2 py-1">{p.permit?.permitNo || "N/A"}</td>
                <td className={`border px-2 py-1 font-semibold ${
                  p.permit?.status === "Approved"
                    ? "text-green-600"
                    : p.permit?.status === "Rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}>
                  {p.permit?.status || "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
