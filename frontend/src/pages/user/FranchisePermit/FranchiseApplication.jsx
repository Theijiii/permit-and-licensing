import { useEffect, useState } from "react";

export default function FranchiseApplication() {
  const [franchises, setFranchises] = useState([]);

  useEffect(() => {
    fetch("/api/franchisepermit/franchises")
      .then(res => res.json())
      .then(setFranchises)
      .catch(err => console.error("Franchise Permit Service error:", err));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Franchise Permits</h1>
      <ul className="list-disc pl-5">
        {franchises.map(f => (
          <li key={f.id}>{f.operator} - {f.status}</li>
        ))}
      </ul>
    </div>
  );
}