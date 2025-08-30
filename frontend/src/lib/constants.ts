import { GovernmentService } from "../types";

export const SERVICES: GovernmentService[] = [
  {
    id: "business-permit",
    title: "Business Permit Services",
    description: "Manage new applications and renewals of business permits",
    href: "/user/businesspermit", // Fixed
  },
  {
    id: "barangay-permit",
    title: "Barangay Permit Services",
    description: "Handle barangay clearance and barangay-level certifications",
    href: "/user/barangaypermit", // Fixed
    processes: [
      {
        title: "Barangay Clearance",
        description: "Apply for barangay clearance for personal or business use",
      },
      {
        title: "Residency Certificate",
        description: "Request proof of residency",
      },
    ],
  },
  {
    id: "building-permit",
    title: "Building Permit Services",
    description: "Submit and track building-related permits",
    href: "/user/buildingpermit", // Fixed
    processes: [
      {
        title: "Building Permit",
        description: "Apply for permission to start construction",
      },
      {
        title: "Occupancy Permit",
        description: "Request approval to occupy a finished building",
      },
    ],
  },
  {
    id: "franchise-permit",
    title: "Franchise Permit Services",
    description: "Apply for and manage transport/service-related franchises",
    href: "/user/franchisepermit", // Fixed
    processes: [
      {
        title: "New Franchise Application",
        description: "Submit an application for a franchise permit",
      },
      {
        title: "Franchise Renewal",
        description: "Renew your existing franchise permit",
      },
    ],
  },
  {
    id: "e-permit-tracker",
    title: "e-Permit Tracker",
    description: "Track and monitor all permit applications in one place",
    href: "/user/permittracker", // Fixed
    processes: [
      {
        title: "Application Status",
        description: "Check the current status of your applications",
      },
      {
        title: "Notifications",
        description: "Receive alerts about updates and approvals",
      },
    ],
  },
];
