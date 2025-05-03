import React from 'react';
import Card from '../ui/Card';

const AttributeCreate = () => {
  return (
    <Card>
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Attribute</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Attribute Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter attribute name"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Attribute Type
              </label>
              <select
                id="type"
                name="type"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a type</option>
                <option value="text">Text</option>
                <option value="select">Select</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
              </select>
            </div>
            <div>
              <label htmlFor="values" className="block text-sm font-medium text-gray-700">
                Attribute Values
              </label>
              <div className="mt-1">
                <textarea
                  id="values"
                  name="values"
                  rows={3}
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter values (one per line)"
                />
                <p className="mt-2 text-sm text-gray-500">
                  For select type attributes, enter one value per line
                </p>
              </div>
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
                placeholder="Enter attribute description"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Attribute
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AttributeCreate; 