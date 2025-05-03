import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit, Trash, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const mockProducts = [
  {
    id: 'p1',
    name: 'Wireless Mouse',
    sku: 'WM-001',
    brand: 'Logitech',
    category: 'Accessories',
    price: 29.99,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1612810802412-b83e049ba16e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80', // Better mouse image
  },
  {
    id: 'p2',
    name: 'Mechanical Keyboard',
    sku: 'MK-002',
    brand: 'Keychron',
    category: 'Accessories',
    price: 89.99,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1587202372775-a7701a4e9c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80', // Better keyboard
  },
  {
    id: 'p3',
    name: '27" 4K Monitor',
    sku: 'MON-003',
    brand: 'Dell',
    category: 'Monitors',
    price: 349.99,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1581349487760-6b9b06b17f76?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80', // Better monitor
  },
];



const brands = Array.from(new Set(mockProducts.map((p) => p.brand)));
const categories = Array.from(new Set(mockProducts.map((p) => p.category)));

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [openMenu, setOpenMenu] = useState(null); // for options menu
  const navigate = useNavigate();
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Products</h2>
            <p className="mt-1 text-sm text-gray-500">View and manage all products</p>
          </div>
          <button
            onClick={() => navigate('/Addproduct')}
            className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>

        {/* Filter & Search Section */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:space-x-4 gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B45E0] focus:border-transparent"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5B45E0]"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <select
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5B45E0]"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={product.image} alt={product.name} className="h-10 w-10 rounded object-cover" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.sku}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.brand}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${product.price.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                    <button
                      className="text-[#5B45E0] hover:text-[#4c39c7] font-medium transition-colors duration-150 p-2 rounded-full"
                      onClick={() => setOpenMenu(openMenu === product.id ? null : product.id)}
                      aria-label="Options"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {openMenu === product.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => { setOpenMenu(null); }}>
                          <Eye className="w-4 h-4 mr-2" /> View Details
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => { setOpenMenu(null); }}>
                          <Edit className="w-4 h-4 mr-2" /> Edit
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50" onClick={() => { setOpenMenu(null); }}>
                          <Trash className="w-4 h-4 mr-2" /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList; 