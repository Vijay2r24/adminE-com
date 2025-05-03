import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit, Trash, MapPin, Phone, Mail, Building, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stores = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    products: '',
    employees: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [stores] = useState([
    {
      id: 1,
      name: 'Downtown Store',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      phone: '(555) 123-4567',
      email: 'downtown@store.com',
      status: 'Active',
      products: 250,
      employees: 15
    },
    {
      id: 2,
      name: 'Westside Branch',
      address: '456 West Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      phone: '(555) 987-6543',
      email: 'westside@store.com',
      status: 'Active',
      products: 180,
      employees: 12
    },
    {
      id: 3,
      name: 'Eastside Location',
      address: '789 East Blvd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      phone: '(555) 456-7890',
      email: 'eastside@store.com',
      status: 'Inactive',
      products: 120,
      employees: 8
    }
  ]);

  const handleEdit = (storeId) => {
    // TODO: Implement edit functionality
    console.log('Edit store:', storeId);
  };

  const handleDelete = (storeId) => {
    // TODO: Implement delete functionality
    console.log('Delete store:', storeId);
  };

  const handleMore = (storeId) => {
    // TODO: Implement more options functionality
    console.log('More options for store:', storeId);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      status: '',
      products: '',
      employees: ''
    });
  };

  const filteredStores = stores.filter(store => {
    const matchesSearch = 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.state.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = !filters.status || store.status === filters.status;
    const matchesProducts = !filters.products || store.products >= parseInt(filters.products);
    const matchesEmployees = !filters.employees || store.employees >= parseInt(filters.employees);

    return matchesSearch && matchesStatus && matchesProducts && matchesEmployees;
  });

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Stores</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your store locations and their details
            </p>
          </div>
          <Link
            to="/add-store"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#5B45E0] hover:bg-[#4c39c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Store
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
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
                placeholder="Search stores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center px-4 py-2 border rounded-lg text-sm font-medium ${
              hasActiveFilters
                ? 'border-[#5B45E0] text-[#5B45E0] bg-[#5B45E0]/5'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#5B45E0] text-white">
                {Object.values(filters).filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-900">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                >
                  <option value="">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Products
                </label>
                <input
                  type="number"
                  id="products"
                  name="products"
                  value={filters.products}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                  min="0"
                  placeholder="Minimum products"
                />
              </div>
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                  Min Employees
                </label>
                <input
                  type="number"
                  id="employees"
                  name="employees"
                  value={filters.employees}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                  min="0"
                  placeholder="Minimum employees"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stores List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Store Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inventory
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-[#5B45E0]/10 rounded-lg flex items-center justify-center">
                        <Building className="h-5 w-5 text-[#5B45E0]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{store.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {store.address}, {store.city}, {store.state} {store.zipCode}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-gray-400" />
                      {store.phone}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-gray-400" />
                      {store.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      store.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>Products: {store.products}</div>
                    <div>Employees: {store.employees}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        onClick={() => handleEdit(store.id)}
                        className="text-gray-400 hover:text-[#5B45E0] transition-colors duration-200"
                        title="Edit Store"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(store.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                        title="Delete Store"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleMore(store.id)}
                        className="text-gray-400 hover:text-[#5B45E0] transition-colors duration-200"
                        title="More Options"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
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

export default Stores; 