import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cors());
app.use(express.json());

// Forward requests to each microservice
app.use("/businesspermit", createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
  pathRewrite: { '^/businesspermit': '' }
}));

app.use("/buildingpermit", createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
  pathRewrite: { '^/buildingpermit': '' }
}));

app.use("/franchisepermit", createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
  pathRewrite: { '^/franchisepermit': '' }
}));

app.use("/barangaypermit", createProxyMiddleware({
  target: "http://localhost:3004",
  changeOrigin: true,
  pathRewrite: { '^/barangaypermit': '' }
}));

app.use("/permittracker", createProxyMiddleware({
  target: "http://localhost:3005",
  changeOrigin: true,
  pathRewrite: { '^/permittracker': '' }
}));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});