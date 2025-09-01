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
    label: "Business Application",
    icon: Briefcase,
    subItems: [
      {

        id: "BusAppDash",
        label: "Dashboard",
        path: "/admin/businessdashboard"
      },
      {
        
        id: "BusinessPermit",
        label: "Permit Application",
        path: "/admin/businesspermit"
        
      },
      {
        id: "BusinessProcess",
        label: "Permit Processing",
        path: "/admin/businessprocessing"
      }
    ]
  },
  {
    id: "BuildingPermit",
    label: "Building Application",
    icon: Building2,
    subItems: [
      {

        id: "BuildingDashboard",
        label: "Dashboard",
        path: "/admin/buildingdashboard"
      },
      {

        id: "BuildingPermit",
        label: "Permit Application",
        path: "/admin/buildingpermit"

      },
      {
        id: "BuildingProcess",
        label: "Permit Processing",
        path: "/admin/buildingprocessing"
      }
    ]
  },

  {
    id: "FranchisePermit",
    label: "Franchise Application",
    icon: Bus,
    path: "/admin/franchisepermit",
    subItems: [
      {

        id: "FranchiseDashboard",
        label: "Dashboard",
        path: "/admin/franchisedashboard"
      },
      {

        id: "FranchisePermit",
        label: "Permit Application",
        path: "/admin/franchisepermit"

      },
    ],
  },
  {
    id: "BarangayPermit",
    label: "Barangay Permit",
    icon: Home,
    subItems: [
      {
        id: "BarangayPermit",
        label: "Permit Application",
        path: "/admin/barangaypermit"
      },
      {
        id: "RequestClearance",
        label: "Request Clearance",
        path: "/admin/requestclearance"
      }
    ]
  },
  {
    id: "PermitTracker",
    label: "Permit Tracker",
    icon: Search,
    path: "/admin/permittracker"
  },
]

export default AdminSidebarItems
