import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const BuildingPermit = [
  {
    id: 1,
    name: "Residential House",
    location: "Quezon City",
    permit: { permitNo: "BP-001", issued: "2025-08-01", expiry: "2026-08-01", status: "Active" },
  },
  {
    id: 2,
    name: "Commercial Building",
    location: "Manila",
    permit: { permitNo: "BP-002", issued: "2025-07-15", expiry: "2026-07-15", status: "Pending" },
  },
];

app.get("/building", (req, res) => {
  res.json(BuildingPermit);  // <- siguraduhing tama ang variable
});

app.listen(3002, () => {
  console.log("Building Permit Service running on port 3002");
});
