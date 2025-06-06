import React, { useState } from 'react';
import { ArrowRight, Tag, Info, CheckCircle, ArrowLeft } from 'lucide-react';

const CreateAttribute = ({ setViewMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Text',
    description: '',
    status: 'active',
    validation: {
      required: false,
      min: '',
      max: '',
      pattern: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('basic');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('validation.')) {
      const validationField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        validation: {
          ...prev.validation,
          [validationField]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
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
      newErrors.name = 'Attribute name is required';
    }
    if (!formData.type) {
      newErrors.type = 'Attribute type is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const tabs = [
    { id: 'basic', label: 'Basic Information' },
    { id: 'validation', label: 'Validation Rules' }
  ];

  return (
    <div>
      <div className="flex items-center mb-6">
        <button
         onClick={() => setViewMode('list')}
          className="mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">Create Attribute</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-4">
          <nav className="flex -mb-px px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  `whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm transition-all duration-200 ` +
                  (activeTab === tab.id
                    ? 'border-[#5B45E0] text-[#5B45E0]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300')
                }
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        {activeTab === 'basic' && (
          <>
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* Attribute Name */}
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Attribute Name
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
                    placeholder="Enter attribute name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>
              {/* Attribute Type */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Attribute Type
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
                  </div>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm appearance-none"
                  >
                    <option value="Text">Text</option>
                    <option value="Numeric">Numeric</option>
                    <option value="Boolean">Boolean</option>
                    <option value="Date">Date</option>
                    <option value="Select">Select</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* Status */}
              <div className="w-full md:w-1/2">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
                  </div>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm appearance-none"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              {/* Description */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
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
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm min-h-[80px]"
                    placeholder="Enter attribute description"
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === 'validation' && (
          <div className="space-y-6">
            {/* Required Field */}
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="validation.required"
                  checked={formData.validation.required}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#5B45E0] border-gray-300 rounded focus:ring-[#5B45E0]"
                />
                <span className="text-sm font-medium text-gray-700">Required Field</span>
              </label>
            </div>
            {/* Min/Max Values (for Numeric type) */}
            {formData.type === 'Numeric' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="validation.min" className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Value
                  </label>
                  <input
                    type="number"
                    id="validation.min"
                    name="validation.min"
                    value={formData.validation.min}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200"
                    placeholder="Enter minimum value"
                  />
                </div>
                <div>
                  <label htmlFor="validation.max" className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Value
                  </label>
                  <input
                    type="number"
                    id="validation.max"
                    name="validation.max"
                    value={formData.validation.max}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200"
                    placeholder="Enter maximum value"
                  />
                </div>
              </div>
            )}
            {/* Pattern (for Text type) */}
            {formData.type === 'Text' && (
              <div>
                <label htmlFor="validation.pattern" className="block text-sm font-medium text-gray-700 mb-2">
                  Validation Pattern (Regex)
                </label>
                <input
                  type="text"
                  id="validation.pattern"
                  name="validation.pattern"
                  value={formData.validation.pattern}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200"
                  placeholder="Enter validation pattern"
                />
              </div>
            )}
          </div>
        )}
        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className="px-4 py-2.5 border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2.5 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#5B45E0] hover:bg-[#4c39c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200"
          >
            Create Attribute
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAttribute; 