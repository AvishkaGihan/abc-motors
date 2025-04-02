import {
  Home,
  Menu,
  X,
  FileTextIcon,
  ShoppingCart,
  DollarSign,
  Package,
  BarChart2Icon,
  Settings2,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const pages = [
    { path: "/", title: "Dashboard", icon: <Home size={20} /> },
    {
      path: "/master-data",
      title: "Master Data",
      icon: <FileTextIcon size={20} />,
    },
    {
      path: "/sales-transactions",
      title: "Sales & Transactions",
      icon: <ShoppingCart size={20} />,
    },
    {
      path: "/finance-accounting",
      title: "Finance & Accounting",
      icon: <DollarSign size={20} />,
    },
    {
      path: "/inventory-stock",
      title: "Inventory & Stock",
      icon: <Package size={20} />,
    },
    {
      path: "/reports-analytics",
      title: "Reports & Analytics",
      icon: <BarChart2Icon size={20} />,
    },
    {
      path: "/user-system-management",
      title: "User & System Management",
      icon: <Settings2 size={20} />,
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-80" : "w-20 items-center"
      } transition-all duration-300 h-full flex flex-col bg-blue-600 text-white overflow-hidden`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-6">
        {isOpen && (
          <h1 className="text-2xl font-bold" aria-label="Application Name">
            AbcMotors.
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            <X
              size={20}
              className="text-white transform transition-transform duration-300 hover:rotate-90"
            />
          ) : (
            <Menu
              size={20}
              className="text-white transform transition-transform duration-300 hover:scale-110"
            />
          )}
        </button>
      </div>

      {/* Menu Label */}
      {isOpen && (
        <div className="px-6 py-2">
          <p className="text-sm">Main Menu</p>
        </div>
      )}

      {/* Sidebar Navigation */}
      <nav className="flex-1 space-y-2.5 px-3">
        {pages.map((page) => (
          <SidebarItem key={page.path} page={page} isOpen={isOpen} />
        ))}
      </nav>

      {/* User Profile and Logout Section */}
      <div className="mt-auto border-t border-blue-500 px-3 py-2">
        <UserProfile isOpen={isOpen} />
        <button
          onClick={() => console.log("Logging out...")}
          className="w-full flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:pl-6 rounded group"
          aria-label="Logout"
        >
          <LogOut
            size={20}
            className="transition-transform duration-200 group-hover:scale-110"
          />
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
