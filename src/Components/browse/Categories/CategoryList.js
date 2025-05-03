import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Search, Filter } from 'lucide-react';
import CreateCategory from '../CategoryCreate';

const CategoryList = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [categories] = useState([
    { id: 1, name: 'Electronics', description: 'Electronic devices and accessories', status: 'Active', products: 250 },
    { id: 2, name: 'Clothing', description: 'Fashion and apparel', status: 'Active', products: 180 },
    { id: 3, name: 'Books', description: 'Books and publications', status: 'Inactive', products: 90 },
  ]);

  const filteredCategories = categories.filter(category =>
    (category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter ? category.status === statusFilter : true)
  );

  if (showCreate) {
    return <CreateCategory onBack={() => setShowCreate(false)} />;
  }

  return (
    <div>
      {/* Header with title and Add button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Categories</h2>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0]"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            {showFilters && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => { setStatusFilter(''); setShowFilters(false); }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    statusFilter === '' ? 'font-semibold' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => { setStatusFilter('Active'); setShowFilters(false); }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    statusFilter === 'Active' ? 'font-semibold' : ''
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => { setStatusFilter('Inactive'); setShowFilters(false); }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                    statusFilter === 'Inactive' ? 'font-semibold' : ''
                  }`}
                >
                  Inactive
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{category.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{category.products}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      category.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-[#5B45E0] hover:text-[#4c39c7] mr-4">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No categories found</div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-[#5B45E0] hover:text-[#4c39c7]"
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
