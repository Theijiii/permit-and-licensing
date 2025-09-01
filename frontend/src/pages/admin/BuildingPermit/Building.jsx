<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function BuildingApplication() {
  const [building, setBuilding] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/buildingpermit/building")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setBuilding(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Building Permit Service error:", err);
        setError("Failed to load building permits.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Building Permits</h1>

      {loading && <p>Loading permits...</p>}
      {error && <div className="mb-4 text-red-600"><strong>{error}</strong></div>}
      {!loading && building.length === 0 && <p>No permits available.</p>}

      {!loading && building.length > 0 && (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">Building</th>
              <th className="border px-2 py-1">Location</th>
              <th className="border px-2 py-1">Permit No.</th>
              <th className="border px-2 py-1">Issued</th>
              <th className="border px-2 py-1">Expiry</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {building.map((p) => (
              <tr key={p.id}>
                <td className="border px-2 py-1">{p.name}</td>
                <td className="border px-2 py-1">{p.location}</td>
                <td className="border px-2 py-1">{p.permit.permitNo}</td>
                <td className="border px-2 py-1">{p.permit.issued}</td>
                <td className="border px-2 py-1">{p.permit.expiry}</td>
                <td className="border px-2 py-1 font-semibold">{p.permit.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
=======
export default function Building() {
  return (
    <div>
      <h1>Building permit APPLICATION</h1>
>>>>>>> restore-dashboard
    </div>
  );
}