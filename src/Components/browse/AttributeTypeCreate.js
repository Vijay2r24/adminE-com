import React from 'react';
import Card from '../ui/Card';

const AttributeTypeCreate = () => {
  return (
    <Card>
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Attribute Type</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Type Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter type name"
              />
            </div>
            <div>
              <label htmlFor="dataType" className="block text-sm font-medium text-gray-700">
                Data Type
              </label>
              <select
                id="dataType"
                name="dataType"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a data type</option>
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
                <option value="date">Date</option>
              </select>
            </div>
            <div>
              <label htmlFor="validation" className="block text-sm font-medium text-gray-700">
                Validation Rules
              </label>
              <textarea
                id="validation"
                name="validation"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter validation rules (JSON format)"
              />
              <p className="mt-2 text-sm text-gray-500">
                Enter validation rules in JSON format (e.g., {'{min: 0, max: 100}'})
              </p>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter type description"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="required"
                  name="required"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="required" className="font-medium text-gray-700">
                  Required
                </label>
                <p className="text-gray-500">Make this attribute type required for all products</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Type
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AttributeTypeCreate; 