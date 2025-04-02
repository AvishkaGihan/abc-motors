import { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Sidebar from "@/components/Sidebar";
import MainContent from "./components/MainContent/MainContent";

// Lazy load page components
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const MasterDataPage = lazy(() => import("./pages/MasterDataPage"));
const SalesTransactionsPage = lazy(() =>
  import("./pages/SalesTransactionsPage")
);
const FinanceAccountingPage = lazy(() =>
  import("./pages/FinanceAccountingPage")
);
const InventoryStockPage = lazy(() => import("./pages/InventoryStockPage"));
const ReportsAnalyticsPage = lazy(() => import("./pages/ReportsAnalyticsPage"));
const UserSystemManagementPage = lazy(() =>
  import("./pages/UserSystemManagementPage")
);

// Lazy load master data subpages
const CompanyMasterPage = lazy(() =>
  import("./pages/MasterData/CompanyMasterPage")
);
const BankMasterPage = lazy(() => import("./pages/MasterData/BankMasterPage"));

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 text-gray-800">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 transition-all duration-300 overflow-auto">
          <MainContent>
            <Suspense fallback={<div className="p-4">Loading...</div>}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/master-data" element={<MasterDataPage />} />
                <Route
                  path="/master-data/company-master"
                  element={<CompanyMasterPage />}
                />
                <Route
                  path="/master-data/bank-master"
                  element={<BankMasterPage />}
                />
                <Route
                  path="/sales-transactions/*"
                  element={<SalesTransactionsPage />}
                />
                <Route
                  path="/finance-accounting/*"
                  element={<FinanceAccountingPage />}
                />
                <Route
                  path="/inventory-stock/*"
                  element={<InventoryStockPage />}
                />
                <Route
                  path="/reports-analytics/*"
                  element={<ReportsAnalyticsPage />}
                />
                <Route
                  path="/user-system-management/*"
                  element={<UserSystemManagementPage />}
                />
              </Routes>
            </Suspense>
          </MainContent>
        </div>
      </div>
    </Router>
  );
};

export default App;
