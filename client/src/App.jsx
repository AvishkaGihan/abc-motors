import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  const [activePage, setActivePage] = useState("company-master");

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Tabs */}
        <div className="bg-white border-b border-gray-100 flex">
          <button
            className={`py-4 px-6 font-medium ${
              activePage === "company-master"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActivePage("company-master")}
          >
            Company Master
          </button>
          <button
            className={`py-4 px-6 font-medium ${
              activePage === "company-accounts"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActivePage("company-accounts")}
          >
            Company Accounts
          </button>
        </div>

        {/* Page Content */}
        <Content activePage={activePage} />
      </div>
    </div>
  );
};

export default App;
