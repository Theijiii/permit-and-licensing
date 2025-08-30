import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const franchises = [
  { id: 1, operator: "Alpha Transport", status: "Active" },
  { id: 2, operator: "Bravo Lines", status: "Pending" },
];

app.get("/franchises", (req, res) => {
  res.json(franchises);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Franchise Permit Service running on port ${PORT}`);
});