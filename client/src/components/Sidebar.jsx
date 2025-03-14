import SidebarItem from "./SidebarItem";
import {
  LayoutDashboard,
  Database,
  ShoppingCart,
  LineChart,
  BarChart3,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
  { icon: <Database size={20} />, text: "Master Data" },
  { icon: <ShoppingCart size={20} />, text: "Sales & Transactions" },
  { icon: <LineChart size={20} />, text: "Finance & Accounting" },
  { icon: <BarChart3 size={20} />, text: "Inventory & Stock" },
  { icon: <BarChart3 size={20} />, text: "Reports & Analytics" },
  { icon: <Settings size={20} />, text: "User & System Management" },
];

function Sidebar() {
  return (
    <div className="w-80 bg-blue-600 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 font-bold text-2xl">AbcMotors.</div>

      {/* Main Menu */}
      <div className="mt-4 flex-1">
        <div className="px-4 text-sm text-blue-200 mb-2">Main Menu</div>
        {menuItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>

      {/* User Profile and Logout Section */}
      <div className="mt-auto mb-6">
        <div className="border-t border-blue-500 pt-4 mx-4">
          {/* User Profile */}
          <div className="flex items-center p-2 mb-2 rounded cursor-pointer hover:bg-blue-700">
            <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center mr-3">
              <User size={20} color="#1D4ED8" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">John Doe</span>
              <span className="text-sm text-blue-200">Admin</span>
            </div>
            <LogOut size={20} className="ml-auto" />
          </div>

          {/* Logout Button */}
          <div className="flex items-center p-2 rounded cursor-pointer hover:bg-blue-700">
            <LogOut size={20} className="mr-3" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
