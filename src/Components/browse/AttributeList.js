import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { MoreVertical, Edit, Trash } from 'lucide-react';

const mockAttributes = [
  {
    id: 1,
    name: 'Size',
    type: 'Select',
    values: ['S', 'M', 'L', 'XL'],
    products: 120,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Material',
    type: 'Select',
    values: ['Cotton', 'Polyester', 'Wool'],
    products: 85,
    status: 'Active',
  },
  // Add more attributes as needed
];

const AttributeList = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attribute
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Values
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
            {mockAttributes.map((attribute) => (
              <tr key={attribute.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{attribute.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {attribute.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {attribute.values.map((value) => (
                      <Badge key={value} variant="default">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {attribute.products} products
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={attribute.status === 'Active' ? 'success' : 'warning'}>
                    {attribute.status}
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

export default AttributeList; 