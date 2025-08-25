import { LayoutDashboard, Settings, Users, FileText } from 'lucide-react'

const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "BusinessPermit",
    label: "Business Permit Application",
    icon: LayoutDashboard,
    path:"/businesspermit"
  },
{
  id: "BuildingPermit",
  label: "Building and Construction Permit",
  path: "/buildingpermit"
},

{
    id: "FranchisePermit",
    label: "Franchise and Transport Permit",
    icon: LayoutDashboard,
    path: "/franchisepermit"
},
{
    id: "BarangayPermit",
    label: "Barangay Permit",
    icon: LayoutDashboard,
    path: "/barangaypermit"
},
{
    id: "PermitTracker",
    label: "Permit Tracker",
    icon: LayoutDashboard,
    path: "/permittracker"
},
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    subItems: [
      {
        id: "general-settings",
        label: "General",
        path: "/settings/general"
      },
      {
        id: "security-settings",
        label: "Security",
        path: "/settings/security"
      }
    ]
  }
]

export default sidebarItems