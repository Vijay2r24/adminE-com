import React, { useState } from 'react';
import { Search, Filter, ChevronDown, X } from 'lucide-react';

const OrderList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    dateRange: null,
    paymentMethod: []
  });

  const filterOptions = {
    status: ['Pending', 'Processing', 'Completed', 'Cancelled'],
    paymentMethod: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      status: [],
      dateRange: null,
      paymentMethod: []
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and track your orders
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Search and Filter Bar */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200"
                />
              </div>

              {/* Filter Button */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Filter Dropdown */}
                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium text-gray-900">Filters</h3>
                        <button
                          onClick={clearFilters}
                          className="text-sm text-[#5B45E0] hover:text-[#4c39c7]"
                        >
                          Clear all
                        </button>
                      </div>

                      {/* Status Filter */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
                        <div className="space-y-2">
                          {filterOptions.status.map(status => (
                            <label key={status} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedFilters.status.includes(status)}
                                onChange={() => toggleFilter('status', status)}
                                className="h-4 w-4 text-[#5B45E0] border-gray-300 rounded focus:ring-[#5B45E0]"
                              />
                              <span className="ml-2 text-sm text-gray-600">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Payment Method Filter */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Payment Method</h4>
                        <div className="space-y-2">
                          {filterOptions.paymentMethod.map(method => (
                            <label key={method} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedFilters.paymentMethod.includes(method)}
                                onChange={() => toggleFilter('paymentMethod', method)}
                                className="h-4 w-4 text-[#5B45E0] border-gray-300 rounded focus:ring-[#5B45E0]"
                              />
                              <span className="ml-2 text-sm text-gray-600">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Date Range Filter */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Date Range</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] text-sm"
                          />
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] text-sm"
                          />
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => setIsFilterOpen(false)}
                          className="w-full px-4 py-2 bg-[#5B45E0] text-white rounded-lg hover:bg-[#4c39c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Active Filters */}
            {(selectedFilters.status.length > 0 || selectedFilters.paymentMethod.length > 0) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedFilters.status.map(status => (
                  <span
                    key={status}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#5B45E0]/10 text-[#5B45E0]"
                  >
                    {status}
                    <button
                      onClick={() => toggleFilter('status', status)}
                      className="ml-2 hover:text-[#4c39c7]"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                {selectedFilters.paymentMethod.map(method => (
                  <span
                    key={method}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#5B45E0]/10 text-[#5B45E0]"
                  >
                    {method}
                    <button
                      onClick={() => toggleFilter('paymentMethod', method)}
                      className="ml-2 hover:text-[#4c39c7]"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Sample order row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #ORD-001
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-02-20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $299.99
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-[#5B45E0] hover:text-[#4c39c7]">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList; 