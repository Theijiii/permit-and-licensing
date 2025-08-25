import { useEffect, useState } from "react";

export default function BarangayPermit() {
  const [clearances, setClearances] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/barangay-permit/barangay-clearance")
      .then(res => res.json())
      .then(setClearances)
      .catch(err => console.error("Barangay Permit Service error:", err));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Barangay Clearances</h1>
      <ul className="list-disc pl-5">
        {clearances.map(c => (
          <li key={c.id}>{c.name} - {c.status}</li>
        ))}
      </ul>
    </div>
  );
}
