import { useNavigate } from "react-router";
import { Building, Users, Truck, Package } from "lucide-react";

const MasterDataPage = () => {
  const navigate = useNavigate();

  // Define menu card data with their respective buttons
  const menuCards = [
    {
      id: "admin",
      title: "Admin",
      description: "Manage company, bank, and area information",
      icon: <Building className="w-10 h-10" />,
      buttons: [
        { name: "View Company Master", path: "/master-data/company-master" },
        { name: "View Bank Master", path: "/master-data/bank-master" },
        { name: "View Area Master", path: "/master-data/area-master" },
      ],
    },
    {
      id: "customers",
      title: "Customers",
      description: "Manage customer data and categories",
      icon: <Users className="w-10 h-10" />,
      buttons: [
        { name: "View Customer Master", path: "/master-data/customer-master" },
        {
          name: "View Customer Category",
          path: "/master-data/customer-category",
        },
      ],
    },
    {
      id: "suppliers",
      title: "Suppliers",
      description: "Manage supplier information",
      icon: <Truck className="w-10 h-10" />,
      buttons: [
        { name: "View Supplier Master", path: "/master-data/supplier-master" },
      ],
    },
    {
      id: "products",
      title: "Products",
      description: "Manage product details and categories",
      icon: <Package className="w-10 h-10" />,
      buttons: [
        { name: "View Product Master", path: "/master-data/product-master" },
        {
          name: "View Product Category",
          path: "/master-data/product-category",
        },
        { name: "View Product Units", path: "/master-data/product-units" },
      ],
    },
  ];

  // Render a menu card component
  const MenuCard = ({ card }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="p-6 bg-blue-50 flex items-center">
        <div className="rounded-full p-3 bg-blue-100 text-blue-700 mr-4">
          {card.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{card.description}</p>
        </div>
      </div>
      <div className="p-6 space-y-4 flex-grow">
        {card.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => navigate(button.path)}
            className="w-full text-left px-4 py-3 rounded bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 flex items-center transition-colors duration-200"
          >
            <span className="mr-2">•</span>
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Master Data Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage all the master data for your business from one place
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuCards.map((card) => (
          <MenuCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default MasterDataPage;
