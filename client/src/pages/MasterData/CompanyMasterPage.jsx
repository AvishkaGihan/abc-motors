import { useState } from "react";

const CompanyMasterPage = () => {
  // Sample data - in a real app, this would come from an API
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "ABC Motors Main Branch",
      address: "123 Main St, Colombo",
      phone: "011-2345678",
      email: "main@abcmotors.com",
    },
    {
      id: 2,
      name: "ABC Motors North Branch",
      address: "456 North Rd, Jaffna",
      phone: "021-8765432",
      email: "north@abcmotors.com",
    },
  ]);

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Company Master</h1>
          <p className="text-gray-600 mt-1">Manage company information</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Add New Company
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{company.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {company.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{company.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{company.email}</td>
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

export default CompanyMasterPage;
