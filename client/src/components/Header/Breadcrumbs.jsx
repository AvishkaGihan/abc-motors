import React from "react";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center text-sm text-gray-500 mt-2">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className="mx-1" />}
          <span className={index === paths.length - 1 ? "font-medium" : ""}>
            {path}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
