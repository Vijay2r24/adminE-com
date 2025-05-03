import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';
import Card, { CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'draft' | 'out-of-stock';
  image: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with long battery life.',
    price: 129.99,
    stock: 25,
    category: 'Electronics',
    status: 'active',
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness and health tracking smart watch with heart rate monitor.',
    price: 199.99,
    stock: 3,
    category: 'Electronics',
    status: 'active',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 20 hours of battery life.',
    price: 79.99,
    stock: 15,
    category: 'Electronics',
    status: 'active',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Smartphone',
    description: 'Latest generation smartphone with professional camera.',
    price: 899.99,
    stock: 0,
    category: 'Electronics',
    status: 'out-of-stock',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '5',
    name: 'Laptop',
    description: 'High-performance laptop for gaming and professional use.',
    price: 1299.99,
    stock: 8,
    category: 'Computers',
    status: 'active',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300'
  }
];

const getStatusBadgeVariant = (status: string) => {
  const variants: Record<string, 'default' | 'secondary' | 'success' | 'warning' | 'danger'> = {
    active: 'success',
    draft: 'default',
    'out-of-stock': 'danger'
  };
  return variants[status] || 'default';
};

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));
  
  return (
    <div className="space-y-6 mt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Button icon={<Plus size={16} />}>
          Add Product
        </Button>
      </div>
      
      <Card>
        <CardHeader className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              icon={<Filter size={16} />}
              className="flex items-center"
            >
              Filter
            </Button>
            <select 
              className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-sm text-gray-700">
                  <th className="py-3 px-4 text-left font-medium">Product</th>
                  <th className="py-3 px-4 text-left font-medium">Category</th>
                  <th className="py-3 px-4 text-left font-medium">Price</th>
                  <th className="py-3 px-4 text-left font-medium">Stock</th>
                  <th className="py-3 px-4 text-left font-medium">Status</th>
                  <th className="py-3 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500 truncate max-w-xs">{product.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm">{product.category}</td>
                    <td className="py-4 px-4 text-sm">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-4 text-sm">{product.stock}</td>
                    <td className="py-4 px-4 text-sm">
                      <Badge variant={getStatusBadgeVariant(product.status)}>
                        {product.status.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-1 text-gray-500 hover:text-indigo-600 focus:outline-none">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-red-600 focus:outline-none">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductList;