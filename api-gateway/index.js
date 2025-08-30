import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cors());
app.use(express.json());

// -------------------- BUSINESS PERMIT --------------------
app.use("/admin/businesspermit", createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
  pathRewrite: { "^/admin/businesspermit": "" }
}));

app.use("/user/businesspermit", createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
  pathRewrite: { "^/user/businesspermit": "/user" }
}));

// -------------------- BUILDING PERMIT --------------------
app.use("/admin/buildingpermit", createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
  pathRewrite: { "^/admin/buildingpermit": "/admin" }
}));

app.use("/user/buildingpermit", createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
  pathRewrite: { "^/user/buildingpermit": "/user"}
}));

app.use("/admin/franchisepermit", createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
  pathRewrite: { "^/admin/franchisepermit": "/admin" }
}));

app.use("/user/franchisepermit", createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
  pathRewrite: { "^/user/franchisepermit": "/user"}
}));


app.use("/admin/barangaypermit", createProxyMiddleware({
  target: "http://localhost:3004",
  changeOrigin: true,
  pathRewrite: { "^/admin/barangaypermit": "/admin" }
}));



app.use("/user/barangaypermit", createProxyMiddleware({
  target: "http://localhost:3004",
  changeOrigin: true,
  pathRewrite: { "^/user/barangaypermit": "/user" }
}));


app.use("/admin/permittracker", createProxyMiddleware({
  target: "http://localhost:3005",
  changeOrigin: true,
  pathRewrite: { "^/admin/permittracker": "/admin" }
}));

app.use("/user/permittracker", createProxyMiddleware({
  target: "http://localhost:3005",
  changeOrigin: true,
  pathRewrite: { "^/user/permittracker": "/user" }
}));


// -------------------- START API GATEWAY --------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` API Gateway running on port ${PORT}`);
});
