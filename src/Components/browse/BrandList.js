import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { MoreVertical, Edit, Trash } from 'lucide-react';

const mockBrands = [
  {
    id: 1,
    name: 'Nike',
    products: 120,
    status: 'Active',
    logo: 'https://example.com/nike-logo.png',
  },
  {
    id: 2,
    name: 'Adidas',
    products: 95,
    status: 'Active',
    logo: 'https://example.com/adidas-logo.png',
  },
  // Add more brands as needed
];

const BrandList = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockBrands.map((brand) => (
              <tr key={brand.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-contain"
                        src={brand.logo}
                        alt={brand.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{brand.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {brand.products} products
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={brand.status === 'Active' ? 'success' : 'warning'}>
                    {brand.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default BrandList; 