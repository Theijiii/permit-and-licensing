import { useEffect, useState } from "react";

export default function UserTracker() {
  const [tracking, setTracking] = useState([]);

  useEffect(() => {
    fetch("/api/permittracker/track")
      .then(res => res.json())
      .then(setTracking)
      .catch(err => console.error("E-Permit Tracker Service error:", err));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">E-Permit Tracker</h1>
      <ul className="list-disc pl-5">
        {tracking.map(t => (
          <li key={t.id}>{t.permitType} - {t.status}</li>
        ))}
      </ul>
    </div>
  );
}