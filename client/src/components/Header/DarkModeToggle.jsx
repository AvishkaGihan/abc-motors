import { Sun } from "lucide-react";

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md hover:bg-gray-100"
    >
      <Sun size={20} />
    </button>
  );
};

export default DarkModeToggle;
