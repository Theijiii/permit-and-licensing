import Dashboard from './pages/Dashboard'
import BusinessPermit from './pages/BusinessPermit'
import BuildingPermit from './pages/BuildingPermit'
import FranchisePermit from './pages/FranchisePermit'
import BarangayPermit from './pages/BarangayPermit'
import PermitTracker from './pages/PermitTracker'
import Module2 from './pages/Module2'
import GeneralSettings from './pages/settings/General'
import SecuritySettings from './pages/settings/Security'

const routes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/businesspermit", element: <BusinessPermit /> },
  { path: "/buildingpermit", element: <BuildingPermit /> },
  { path: "/franchisepermit", element: <FranchisePermit /> },
  { path: "/barangaypermit", element: <BarangayPermit /> },
  { path: "/permit-tracker", element: <PermitTracker /> }, // fixed naming
  { path: "/module2", element: <Module2 /> },
  { path: "/settings/general", element: <GeneralSettings /> },
  { path: "/settings/security", element: <SecuritySettings /> },
]

export default routes
