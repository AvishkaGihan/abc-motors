// components/SidebarItem.js
import React from "react";

function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center p-2 mx-4 rounded cursor-pointer hover:bg-blue-700">
      <div className="mr-3">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

export default SidebarItem;
