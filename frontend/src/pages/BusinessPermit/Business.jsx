import { useEffect, useState } from "react";

export default function BusinessPermit() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/business-permit/applications")
      .then(res => res.json())
      .then(setApplications)
      .catch(err => console.error("Business Permit Service error:", err));
  }, []);

  return (
    <div>
      <h1>Business Permit Applications</h1>
      <ul>
        {applications.map(a => (
          <li key={a.id}>{a.applicant} - {a.status}</li>
        ))}
      </ul>
    </div>
  );
}
