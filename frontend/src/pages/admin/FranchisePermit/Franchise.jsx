import { useEffect, useState } from "react";

export default function FranchisePermit() {
  const [franchises, setFranchises] = useState([]);

  useEffect(() => {
    fetch("/api/franchisepermit/franchises")
      .then(res => res.json())
      .then(setFranchises)
      .catch(err => console.error("Franchise Permit Service error:", err));
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <h1 className="text-xl font-bold mb-4">Franchise Permits</h1>
=======
      <h1 className="text-xl font-bold mb-4">Franchise Permits shahdgaghsfgh</h1>
>>>>>>> restore-dashboard
      <ul className="list-disc pl-5">
        {franchises.map(f => (
          <li key={f.id}>{f.operator} - {f.status}</li>
        ))}
      </ul>
    </div>
  );
}