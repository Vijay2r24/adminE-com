import React, { useState } from 'react';
import { ArrowLeft, Upload, Tag, Info, CheckCircle, Image } from 'lucide-react';

const CreateCategory = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    status: 'active',
    description: '',
    parentCategory: ''
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          image: 'File size should be less than 10MB'
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Category name is required';
    }
    if (!formData.image) {
      newErrors.image = 'Category image is required';
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
        <h2 className="text-lg font-medium text-gray-900">Create Category</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Category Information</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Category Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
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
                placeholder="Enter category name"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          {/* Parent Category */}
          <div>
            <label htmlFor="parentCategory" className="block text-sm font-medium text-gray-700 mb-2">
              Parent Category
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-5 w-5 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
              </div>
              <select
                id="parentCategory"
                name="parentCategory"
                value={formData.parentCategory}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 group-hover:border-[#5B45E0] bg-white shadow-sm appearance-none"
              >
                <option value="">Select parent category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Image
            </label>
            <div 
              className={`relative group rounded-xl border-2 ${errors.image ? 'border-red-300' : 'border-gray-200'} border-dashed transition-all duration-200 hover:border-[#5B45E0] bg-gray-50 hover:bg-gray-50/50`}
            >
              <div className="p-6">
                <div className="space-y-3 text-center">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-white shadow-sm border border-gray-100">
                      <Image className="h-8 w-8 text-gray-400 group-hover:text-[#5B45E0] transition-colors duration-200" />
                    </div>
                  </div>
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-[#5B45E0] hover:text-[#4c39c7] focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  {formData.image && (
                    <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-sm text-green-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-1.5" />
                        {formData.image.name}
                      </p>
                    </div>
                  )}
                  {errors.image && (
                    <p className="text-sm text-red-600 flex items-center justify-center">
                      <span className="mr-1">⚠️</span>
                      {errors.image}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
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
                placeholder="Enter category description"
              />
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
              Create Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory; 