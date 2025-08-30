import { useEffect, useState } from "react";

function BarangayPermit() {
  const [permits, setPermits] = useState([]);

  useEffect(() => {
    fetch("/api/barangaypermit/barangay-permit")
      .then(res => res.json())
      .then(data => setPermits(data))
      .catch(err => console.error("Error fetching barangay permits:", err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Barangay Permits</h1>
      <ul>
        {permits.map(p => (
          <li key={p.id}>
            {p.applicant} — {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BarangayPermit;