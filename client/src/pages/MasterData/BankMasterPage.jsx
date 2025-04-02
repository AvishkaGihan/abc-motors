import { useState } from "react";

const BankMasterPage = () => {
  // Sample data - in a real app, this would come from an API
  const [banks, setBanks] = useState([
    {
      id: 1,
      name: "Bank of Ceylon",
      branch: "Colombo Main",
      accountNo: "00123456789",
      swift: "BCEYLKLX",
    },
    {
      id: 2,
      name: "People's Bank",
      branch: "City Branch",
      accountNo: "10987654321",
      swift: "PPLKLKLX",
    },
  ]);

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Bank Master</h1>
          <p className="text-gray-600 mt-1">Manage bank information</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Add New Bank
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Branch
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SWIFT Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {banks.map((bank) => (
              <tr key={bank.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{bank.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{bank.branch}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bank.accountNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{bank.swift}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankMasterPage;
