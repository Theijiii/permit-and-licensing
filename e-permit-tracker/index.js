import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const tracking = [
  { id: 1, permitType: "Business", status: "Approved" },
  { id: 2, permitType: "Building", status: "Pending" },
];

app.get("/track", (req, res) => {
  res.json(tracking);
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`E-Permit Tracker Service running on port ${PORT}`);
});