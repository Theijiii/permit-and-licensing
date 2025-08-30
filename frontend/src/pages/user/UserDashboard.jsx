import { useState } from "react";
import { SERVICES } from "../../lib/constants";
import ServiceCard from "../../components/user/services/ServiceCard";
import SearchBar from "../../components/user/services/SearchBar";

export default function UserDashboard() {
  const [filteredServices, setFilteredServices] = useState(SERVICES);

  return (
    <div className="mx-1 mt-1 p-6 dark:bg-slate-900 bg-white dark:text-slate-300 rounded-lg min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        Dashboard
      </h1>
      <p className="mb-6 text-center">Welcome user! Choose a service below.</p>

      <SearchBar services={SERVICES} onSearch={setFilteredServices} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
