import React from 'react';
import Card from '../../Components/ui/Card';
import Badge from '../../Components/ui/Badge';
import { Search, Filter } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    price: 35,
    status: 'In Stock',
    category: 'Clothing',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  },
  {
    id: 2,
    name: 'Basic Hoodie',
    price: 45,
    status: 'Low Stock',
    category: 'Clothing',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
  },
  // Add more mock products as needed
];

const Browse = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Browse Products</h1>
          <p className="text-gray-500">View and manage your product catalog</p>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search products..."
              />
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Filter className="h-5 w-5 mr-2 text-gray-400" />
            Filters
          </button>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id} className="relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <Badge variant={product.status === 'In Stock' ? 'success' : 'warning'}>
                  {product.status}
                </Badge>
              </div>
              <p className="mt-2 text-lg font-medium text-gray-900">${product.price}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Browse; 