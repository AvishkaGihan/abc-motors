// components/Header.js
import { Home, ChevronRight } from "lucide-react";

function Header() {
  return (
    <div className="bg-white p-4 border-b border-gray-100 flex items-center">
      <Home size={16} className="text-gray-500" />
      <ChevronRight size={16} className="mx-2 text-gray-400" />
      <span className="text-gray-500">Master Data</span>
      <ChevronRight size={16} className="mx-2 text-gray-400" />
      <span className="text-gray-500">Admin</span>
      <ChevronRight size={16} className="mx-2 text-gray-400" />
      <span className="text-gray-600 font-medium">Company Master</span>
    </div>
  );
}

export default Header;
