<<<<<<< HEAD

import { Routes, Route, Navigate } from "react-router-dom"
import UserLayout from "./layouts/UserLayout"
import AdminLayout from "./layouts/AdminLayout"

// User Pages
import UserDashboard from "./pages/user/UserDashboard"
import BusinessApplication from "./pages/user/BusinessPermit/BusinessApplication"
import BuildingApplication from "./pages/user/BuildingPermit/BuildingApplication"
import FranchiseApplication from "./pages/user/FranchisePermit/FranchiseApplication"
import BarangayApplication from "./pages/user/BarangayPermit/BarangayApplication"
import UserTracker from "./pages/user/PermitTracker/UserTracker"
import UserGeneralSettings from "./pages/user/Settings/General"
import UserSecuritySettings from "./pages/user/Settings/Security"

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard"
import Business from "./pages/admin/BusinessPermit/Business"
import Building from "./pages/admin/BuildingPermit/Building"
import Franchise from "./pages/admin/FranchisePermit/Franchise"
import Barangay from "./pages/admin/BarangayPermit/Barangay"
import Tracker from "./pages/admin/PermitTracker/Tracker"
import AdminGeneralSettings from "./pages/admin/Settings/General"
import AdminSecuritySettings from "./pages/admin/Settings/Security"
=======
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
import BusAppDash from "./pages/admin/BusinessPermit/businessdashboard";
import BusinessProcess from "./pages/admin/BusinessPermit/BusinessProcessing";

import Building from "./pages/admin/BuildingPermit/Building";
import BuildingDashboard from "./pages/admin/BuildingPermit/BuildingDashboard";
import BuildingProcess from "./pages/admin/BuildingPermit/BuildingProcess";

import FranchisePermit from "./pages/admin/FranchisePermit/Franchise";
import FranchiseDashboard from "./pages/admin/FranchisePermit/FranchiseDashboard" 

import BarangayPermit from "./pages/admin/BarangayPermit/Barangay";
import RequestClearance from "./pages/admin/BarangayPermit/RequestClearance";

import Tracker from "./pages/admin/PermitTracker/Tracker";
>>>>>>> restore-dashboard

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/dashboard" replace />} />
<<<<<<< HEAD
      
      {/* User Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="businesspermit" element={<BusinessApplication />} />
        <Route path="buildingpermit" element={<BuildingApplication />} />
        <Route path="franchisepermit" element={<FranchiseApplication />} />
        <Route path="barangaypermit" element={<BarangayApplication />} />
        <Route path="permittracker" element={<UserTracker />} />
        <Route path="general" element={<UserGeneralSettings />} />
        <Route path="security" element={<UserSecuritySettings />} />
      </Route>

=======

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

>>>>>>> restore-dashboard
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
<<<<<<< HEAD
        <Route path="businesspermit" element={<Business />} />
        <Route path="buildingpermit" element={<Building />} />
        <Route path="franchisepermit" element={<Franchise />} />
        <Route path="barangaypermit" element={<Barangay />} />
        <Route path="permittracker" element={<Tracker />} />
        <Route path="general" element={<AdminGeneralSettings />} />
        <Route path="security" element={<AdminSecuritySettings />} />
      </Route>
    </Routes>
  )
}

export default App
=======

        <Route path="businesspermit" element={<Business />} />
        <Route path="businessdashboard" element={<BusAppDash />} />
        <Route path="businessprocessing" element={<BusinessProcess />} />

        <Route path="buildingpermit" element={<Building />} />
        <Route path="buildingdashboard" element={<BuildingDashboard />} />
        <Route path="buildingprocessing" element={<BuildingProcess />} />

        <Route path="franchisepermit" element={<FranchisePermit />} />
        <Route path="franchisedashboard" element={<FranchiseDashboard />} />

        <Route path="barangaypermit" element={<BarangayPermit />} />
        <Route path="requestclearance" element={<RequestClearance />} />

        <Route path="permittracker" element={<Tracker />} />
      
      </Route>
    </Routes>
  );
}

export default App;
>>>>>>> restore-dashboard
