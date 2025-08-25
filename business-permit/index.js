import express from "express";

const app = express();
const PORT = 3001;

// Sample data
const applications = [
  { id: 1, applicant: "Juan Dela Cruz", status: "Pending" },
  { id: 2, applicant: "Maria Clara", status: "Approved" },
  { id: 3, applicant: "Pedro Santos", status: "Rejected" },
];

// Route to get all applications
app.get("/applications", (req, res) => {
  res.json(applications);
});

// Start server
app.listen(PORT, () => {
  console.log(`Business Permit Service running on port ${PORT}`);
});
