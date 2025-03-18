import { Bell, Search } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import Breadcrumbs from "./Breadcrumbs";

const Header = ({ toggleDarkMode }) => {
  return (
    <header className=" px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
      <Breadcrumbs />
    </header>
  );
};

export default Header;
