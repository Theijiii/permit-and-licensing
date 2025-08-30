import { Link } from "react-router-dom";
import { GovernmentService } from "../../../types";

interface ServiceCardProps {
  service: GovernmentService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={service.href} // Ensure this links to the correct route
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-orange-300 hover:bg-orange-100 shadow-lg shadow-orange-200/50 hover:shadow-orange-300/50 flex flex-col justify-between h-full"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {service.title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-70">
        {service.description}
      </p>
    </Link>
  );
}
