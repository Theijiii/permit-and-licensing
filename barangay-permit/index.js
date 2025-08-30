import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Mock data
const barangayPermit = [
  { id: 1, applicant: "Juan Dela Cruz", purpose: "Business registration", status: "Approved" },
  { id: 2, applicant: "Maria Santos", purpose: "Job requirement", status: "Pending" },
];

app.use("/barangay-permit", (req, res) => {
  res.json(barangayPermit);
});

app.use("/barangay-permit:id", (req, res) => {
  const permit = barangayPermit.find(p => p.id == req.params.id);
  if (!permit) return res.status(404).json({ message: "Not found" });
  res.json(permit);
});

app.post("/apply", (req, res) => {
  const newPermit = { id: barangayPermit.length + 1, ...req.body, status: "Pending" };
  barangayPermit.push(newPermit);
  res.status(201).json(newPermit);
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Barangay Permit Service running on port ${PORT}`);
});
