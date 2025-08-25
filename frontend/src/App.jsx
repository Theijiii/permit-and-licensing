import { useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/Header'
import sidebarItems from './components/sidebar/sidebarItems'

// Main pages
import Dashboard from './pages/Dashboard'
import Module2 from './pages/Module2'

// Permits (FIXED: folder names must match PascalCase)
import BusinessPermit from './pages/BusinessPermit/Business'
import BuildingPermit from './pages/BuildingPermit/Building'
import FranchisePermit from './pages/FranchisePermit/Franchise'
import BarangayPermit from './pages/BarangayPermit/Barangay'
import PermitTracker from './pages/PermitTracker/Tracker'

// Submodules under BusinessPermit
import Submodule1 from './pages/BusinessPermit/Submodule1'
import Submodule2 from './pages/BusinessPermit/Submodule2'
import Submodule3 from './pages/BusinessPermit/Submodule3'

// Settings
import GeneralSettings from './pages/settings/General'
import SecuritySettings from './pages/settings/Security'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const location = useLocation()

  function getBreadcrumb() {
    for (const item of sidebarItems) {
      if (item.path === location.pathname) return [item.label]
      if (item.subItems) {
        const sub = item.subItems.find(sub => sub.path === location.pathname)
        if (sub) return [item.label, sub.label]
      }
    }
    return ['Dashboard']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 transition-colors duration-200">
      <div className="flex h-screen overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} />
        <div className="flex-1 flex flex-col">
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            breadcrumb={getBreadcrumb()}
          />
          <main className="flex-1 overflow-auto p-8 dark:bg-slate-800">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Permits */}
              <Route path="/barangaypermit" element={<BarangayPermit />} />
              <Route path="/buildingpermit" element={<BuildingPermit />} />
              <Route path="/businesspermit" element={<BusinessPermit />} />
              <Route path="/franchisepermit" element={<FranchisePermit />} />
              <Route path="/permit-tracker" element={<PermitTracker />} />

              {/* Submodules under BusinessPermit */}
              <Route path="/businesspermit/submodule1" element={<Submodule1 />} />
              <Route path="/businesspermit/submodule2" element={<Submodule2 />} />
              <Route path="/businesspermit/submodule3" element={<Submodule3 />} />

              {/* Others */}
              <Route path="/module2" element={<Module2 />} />
              <Route path="/settings/general" element={<GeneralSettings />} />
              <Route path="/settings/security" element={<SecuritySettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
