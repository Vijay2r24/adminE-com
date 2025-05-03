import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { MoreVertical, Edit, Trash } from 'lucide-react';

const mockColors = [
  {
    id: 1,
    name: 'Red',
    hex: '#FF0000',
    products: 45,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Blue',
    hex: '#0000FF',
    products: 32,
    status: 'Active',
  },
  // Add more colors as needed
];

const ColorList = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Color
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
            {mockColors.map((color) => (
              <tr key={color.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div
                      className="h-8 w-8 rounded-full border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{color.name}</div>
                      <div className="text-sm text-gray-500">{color.hex}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {color.products} products
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={color.status === 'Active' ? 'success' : 'warning'}>
                    {color.status}
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

export default ColorList; 