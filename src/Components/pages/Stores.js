import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit, Trash, MapPin, Phone, Mail, Building, Filter, X, LayoutGrid, List } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  // Pagination logic
  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);
  const paginatedStores = filteredStores.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Reset to page 1 when filters/search change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 min-h-screen bg-gray-50">
      {/* Header: Stores heading and Add Store in one row */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900">Stores</h1>
            <p className="mt-1 text-sm text-gray-500">Manage your store locations and their details</p>
          </div>
          <Link
            to="/add-store"
            className="inline-flex items-center px-4 py-2 border border-[#5B45E0] rounded-lg text-sm font-medium text-white bg-[#5B45E0] hover:bg-[#4c39c7] gap-2 shadow-sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Store
          </Link>
        </div>
      </div>

      {/* Action Bar: Search, Filter, Grid/Table Toggle */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* Search */}
          <div className="flex-1">
            <div className="relative h-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm h-full"
                placeholder="Search stores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {/* Filter Button */}
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
          {/* Grid/Table View Toggle Button */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`inline-flex items-center px-3 py-2 border rounded-lg text-sm font-medium ${viewMode === 'table' ? 'border-[#5B45E0] text-[#5B45E0] bg-[#5B45E0]/5' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              title="Table View"
            >
              <List className="w-4 h-4 mr-1" />
              Table
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center px-3 py-2 border rounded-lg text-sm font-medium ${viewMode === 'grid' ? 'border-[#5B45E0] text-[#5B45E0] bg-[#5B45E0]/5' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4 mr-1" />
              Grid
            </button>
          </div>
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

      {/* Stores List: Table or Grid View */}
      {viewMode === 'table' ? (
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
                {paginatedStores.map((store) => (
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
                {paginatedStores.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">
                      No stores found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination Section */}
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredStores.length)}</span> of{' '}
                <span className="font-medium">{filteredStores.length}</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx + 1}
                    className={`px-3 py-1 border rounded-md text-sm font-medium ${currentPage === idx + 1 ? 'bg-[#5B45E0] text-white border-[#5B45E0]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => handlePageClick(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Grid View
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedStores.map(store => (
              <div key={store.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-200">
                {/* Store Icon and Name */}
                <div className="flex items-center gap-4 pb-2 border-b border-gray-100">
                  <div className="flex-shrink-0 h-12 w-12 bg-[#5B45E0]/10 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-[#5B45E0]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{store.name}</div>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {store.address}, {store.city}, {store.state} {store.zipCode}
                    </div>
                  </div>
                </div>
                {/* Status and Inventory */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${store.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{store.status}</span>
                  <span className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Products: {store.products}</span>
                  <span className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Employees: {store.employees}</span>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-2">
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:ml-4">
                    <Mail className="h-4 w-4" />
                    <span>{store.email}</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100 mt-2">
                  <button onClick={() => handleEdit(store.id)} className="text-gray-400 hover:text-[#5B45E0]" title="Edit Store">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDelete(store.id)} className="text-gray-400 hover:text-red-500" title="Delete Store">
                    <Trash className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleMore(store.id)} className="text-gray-400 hover:text-[#5B45E0]" title="More Options">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Section for Grid View */}
          <div className="px-6 py-4 border-t border-gray-100 mt-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredStores.length)}</span> of{' '}
                <span className="font-medium">{filteredStores.length}</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx + 1}
                    className={`px-3 py-1 border rounded-md text-sm font-medium ${currentPage === idx + 1 ? 'bg-[#5B45E0] text-white border-[#5B45E0]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => handlePageClick(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Stores; 