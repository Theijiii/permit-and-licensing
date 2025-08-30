import { LayoutDashboard, Settings, Briefcase, Building2, Bus, Home, Search } from 'lucide-react'

const AdminSidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    id: "BusinessPermit",
    label: "Business Permit Application",
    icon: Briefcase,
    path:"/admin/businesspermit"
  },
  {
    id: "BuildingPermit",
    label: "Building and Construction Permit",
    icon: Building2,
    path: "/admin/buildingpermit"
  },
  {
    id: "FranchisePermit",
    label: "Franchise and Transport Permit",
    icon: Bus,
    path: "/admin/franchisepermit"
  },
  {
    id: "BarangayPermit",
    label: "Barangay Permit",
    icon: Home,
    path: "/admin/barangaypermit"
  },
  {
    id: "PermitTracker",
    label: "Permit Tracker",
    icon: Search,
    path: "/admin/permittracker"
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    subItems: [
      {
        id: "AdminGeneralSettings",
        label: "General",
        path: "/admin/general"
      },
      {
        id: "AdminSecuritySettings",
        label: "Security",
        path: "/admin/security"
      }
    ]
  }
]

export default AdminSidebarItems
