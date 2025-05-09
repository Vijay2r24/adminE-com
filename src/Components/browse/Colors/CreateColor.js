import React, { useState } from 'react';
import { ArrowLeft, Tag, Info, Palette, ArrowRight } from 'lucide-react';

const CreateColor = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    hexCode: '#000000',
    status: 'active',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      newErrors.name = 'Color name is required';
    }
    if (!formData.hexCode) {
      newErrors.hexCode = 'Color code is required';
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
          <ArrowRight className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">Create Color</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Color Name */}
          <div className="w-full md:w-1/2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Color Name
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
                placeholder="Enter color name"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.name}
                </p>
              )}
            </div>
          </div>
          {/* Color Code */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <label htmlFor="hexCode" className="block text-sm font-medium text-gray-700 mb-2">
              Color Code
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Palette className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  id="hexCode"
                  name="hexCode"
                  value={formData.hexCode}
                  onChange={handleInputChange}
                  className="h-10 w-10 rounded-lg border border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.hexCode}
                  onChange={handleInputChange}
                  name="hexCode"
                  className={`flex-1 pl-12 pr-4 py-3 border ${errors.hexCode ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm`}
                  placeholder="#000000"
                />
              </div>
              {errors.hexCode && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.hexCode}
                </p>
              )}
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
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
                placeholder="Enter color description"
              />
            </div>
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
            Create Color
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateColor; 