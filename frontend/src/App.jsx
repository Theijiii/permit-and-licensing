import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import BusinessApplication from "./pages/user/BusinessPermit/BusinessApplication";
import BuildingApplication from "./pages/user/BuildingPermit/BuildingApplication";
import FranchiseApplication from "./pages/user/FranchisePermit/FranchiseApplication";
import BarangayApplication from "./pages/user/BarangayPermit/BarangayApplication";
import UserTracker from "./pages/user/PermitTracker/UserTracker";
import UserGeneralSettings from "./pages/user/Settings/General";
import UserSecuritySettings from "./pages/user/Settings/Security";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import Business from "./pages/admin/BusinessPermit/Business";
import Building from "./pages/admin/BuildingPermit/Building";
import Franchise from "./pages/admin/FranchisePermit/Franchise";
import Barangay from "./pages/admin/BarangayPermit/Barangay";
import Tracker from "./pages/admin/PermitTracker/Tracker";
import AdminGeneralSettings from "./pages/admin/Settings/General";
import AdminSecuritySettings from "./pages/admin/Settings/Security";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/dashboard" replace />} />

      {/* User Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="businesspermit" element={<BusinessApplication />} />
        <Route path="buildingpermit" element={<BuildingApplication />} />
        <Route path="franchisepermit" element={<FranchiseApplication />} />
        <Route path="barangaypermit" element={<BarangayApplication />} />
        <Route path="permittracker" element={<UserTracker />} />
        <Route path="settings/general" element={<UserGeneralSettings />} />
        <Route path="settings/security" element={<UserSecuritySettings />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="businesspermit" element={<Business />} />
        <Route path="buildingpermit" element={<Building />} />
        <Route path="franchisepermit" element={<Franchise />} />
        <Route path="barangaypermit" element={<Barangay />} />
        <Route path="permittracker" element={<Tracker />} />
        <Route path="settings/general" element={<AdminGeneralSettings />} />
        <Route path="settings/security" element={<AdminSecuritySettings />} />
      </Route>
    </Routes>
  );
}

export default App;