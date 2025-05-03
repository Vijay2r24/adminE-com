import React, { useState } from 'react';
import { Pencil, Trash2, Search, Filter, Plus } from 'lucide-react';
import CreateAttribute from './CreateAttribute';

const AttributeList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const [attributes] = useState([
    {
      id: 1,
      name: 'Screen Size',
      type: 'Numeric',
      description: 'Display size in inches',
      status: 'Active',
      products: 45
    },
    {
      id: 2,
      name: 'Material',
      type: 'Text',
      description: 'Product material type',
      status: 'Active',
      products: 120
    },
    {
      id: 3,
      name: 'Warranty',
      type: 'Boolean',
      description: 'Product warranty status',
      status: 'Inactive',
      products: 30
    },
  ]);

  const filteredAttributes = attributes.filter(attribute => {
    const matchesSearch =
      attribute.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attribute.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter ? attribute.type === typeFilter : true;
    const matchesStatus = statusFilter ? attribute.status === statusFilter : true;

    return matchesSearch && matchesType && matchesStatus;
  });

  if (showCreate) {
    return <CreateAttribute onBack={() => setShowCreate(false)} />;
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Attributes</h2>
        <button
          onClick={() => setShowCreate(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#5B45E0] hover:bg-[#4c39c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Attribute
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                placeholder="Search attributes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0]"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            {showFilter && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => { setStatusFilter(''); setShowFilter(false); }}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  All
                </button>
                <button
                  onClick={() => { setStatusFilter('Active'); setShowFilter(false); }}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Active
                </button>
                <button
                  onClick={() => { setStatusFilter('Inactive'); setShowFilter(false); }}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Inactive
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttributes.map((attribute) => (
                <tr key={attribute.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{attribute.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      attribute.type === 'Numeric'
                        ? 'bg-blue-100 text-blue-800'
                        : attribute.type === 'Text'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {attribute.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{attribute.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{attribute.products}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      attribute.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {attribute.status}
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
      {filteredAttributes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No attributes found</div>
          {(searchQuery || typeFilter || statusFilter) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setTypeFilter('');
                setStatusFilter('');
              }}
              className="mt-2 text-[#5B45E0] hover:text-[#4c39c7]"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AttributeList;
