import React, { useState } from 'react';
import { ArrowLeft, Tag, Info, Settings, Hash } from 'lucide-react';

const CreateAttributeType = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    dataType: '',
    validation: '',
    description: '',
    required: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Attribute type name is required';
    }
    if (!formData.dataType) {
      newErrors.dataType = 'Data type is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-medium text-gray-900">Create Attribute Type</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Attribute Type Information</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
              </div>
            <input
              type="text"
                id="name"
              name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full pl-12 pr-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm`}
              placeholder="Enter attribute type name"
            />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          {/* Data Type */}
          <div>
            <label htmlFor="dataType" className="block text-sm font-medium text-gray-700 mb-2">
              Data Type
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Settings className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
              </div>
              <select
                id="dataType"
                name="dataType"
                value={formData.dataType}
                onChange={handleInputChange}
                className={`w-full pl-12 pr-4 py-3 border ${errors.dataType ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm appearance-none`}
              >
                <option value="">Select a data type</option>
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
                <option value="date">Date</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              {errors.dataType && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.dataType}
                </p>
              )}
            </div>
          </div>

          {/* Validation Rules */}
          <div>
            <label htmlFor="validation" className="block text-sm font-medium text-gray-700 mb-2">
              Validation Rules
            </label>
            <div className="relative group">
              <div className="absolute top-3 left-3 pointer-events-none">
                <Hash className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
              </div>
              <textarea
                id="validation"
                name="validation"
                value={formData.validation}
                onChange={handleInputChange}
                rows={3}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm resize-none"
                placeholder="Enter validation rules (JSON format)"
              />
              <p className="mt-1.5 text-sm text-gray-500">
                Enter validation rules in JSON format (e.g., {'{min: 0, max: 100}'})
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <div className="relative group">
              <div className="absolute top-3 left-3 pointer-events-none">
                <Info className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
              </div>
            <textarea
              id="description"
              name="description"
                value={formData.description}
                onChange={handleInputChange}
              rows={3}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm resize-none"
              placeholder="Enter attribute type description"
            />
            </div>
          </div>

          {/* Required Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="required"
                name="required"
                type="checkbox"
                checked={formData.required}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#5B45E0] border-gray-300 rounded focus:ring-[#5B45E0]"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="required" className="font-medium text-gray-700">
                Required
            </label>
              <p className="text-gray-500">Make this attribute type required for all products</p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2.5 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2.5 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#5B45E0] hover:bg-[#4c39c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
            >
              Create Attribute Type
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAttributeType; 