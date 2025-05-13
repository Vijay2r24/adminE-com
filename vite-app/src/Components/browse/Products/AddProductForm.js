import React, { useState, useCallback } from 'react';
import { Plus, Trash2, X, Upload, Image as ImageIcon, Package, Tag, DollarSign, Hash, Users, Info, ShoppingBag, Palette, Layers } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const AddProductForm = () => {
  const [variants, setVariants] = useState([{ 
    ColourID: '', 
    AttributeValues: [], 
    Quantity: '', 
    SellingPrice: '',
    images: [] 
  }]);
  const [formData, setFormData] = useState({
    AttributeTypeID: '',
    ProductName: '',
    ProductDescription: '',
    BrandID: '',
    CategoryID: '',
    MRP: '',
    ProductDiscount: '',
    Gender: '',
    CreatedBy: 'Admin'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVariantChange = (index, field, value) => {
    const newVariants = [...variants];
    if (field === 'AttributeValues') {
      newVariants[index][field] = value.split(',').map(v => v.trim());
    } else {
      newVariants[index][field] = value;
    }
    setVariants(newVariants);
  };

  const addVariant = () => {
    setVariants([...variants, { 
      ColourID: '', 
      AttributeValues: [], 
      Quantity: '', 
      SellingPrice: '',
      images: [] 
    }]);
  };

  const removeVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const onDrop = useCallback((acceptedFiles, variantIndex) => {
    const newVariants = [...variants];
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    newVariants[variantIndex].images = [...newVariants[variantIndex].images, ...newImages];
    setVariants(newVariants);
  }, [variants]);

  const removeImage = (variantIndex, imageIndex) => {
    const newVariants = [...variants];
    URL.revokeObjectURL(newVariants[variantIndex].images[imageIndex].preview);
    newVariants[variantIndex].images.splice(imageIndex, 1);
    setVariants(newVariants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...formData,
      Variants: variants.map(variant => ({
        ...variant,
        images: variant.images.map(img => img.file)
      }))
    };
    console.log('Product Data:', productData);
    // Here you would typically make an API call to save the product
  };

  const VariantImageUpload = ({ variantIndex }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: (files) => onDrop(files, variantIndex),
      accept: {
        'image/*': ['.jpeg', '.jpg', '.png', '.webp']
      },
      maxSize: 5242880
    });

    return (
      <div className="mt-4">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300
            ${isDragActive 
              ? 'border-blue-500 bg-blue-50 scale-[1.02] shadow-lg' 
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50 hover:shadow-md'}`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-4 bg-blue-50 rounded-2xl">
              <Upload className="h-8 w-8 text-blue-500" />
            </div>
            <div className="text-sm text-gray-600">
              {isDragActive ? (
                <p className="font-medium text-blue-600 text-base">Drop the images here...</p>
              ) : (
                <p className="text-base">Drag & drop images here, or click to select files</p>
              )}
            </div>
            <p className="text-xs text-gray-500">Supports: JPG, PNG, WEBP (max 5MB)</p>
          </div>
        </div>

        {variants[variantIndex].images.length > 0 && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {variants[variantIndex].images.map((image, imageIndex) => (
              <div key={imageIndex} className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                  <img
                    src={image.preview}
                    alt={`Variant ${variantIndex + 1} - Image ${imageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(variantIndex, imageIndex)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 shadow-lg transform hover:scale-110"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
          <p className="text-gray-500">Create a new product with multiple variants and images</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Basic Product Information */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <ShoppingBag className="h-6 w-6 mr-3 text-blue-600" />
                Basic Information
              </h2>
            </div>
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="ProductName"
                        value={formData.ProductName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                        placeholder="Enter product name"
                        required
                      />
                      <Tag className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Attribute Type ID</label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="AttributeTypeID"
                        value={formData.AttributeTypeID}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                        placeholder="Enter attribute type ID"
                        required
                      />
                      <Hash className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand ID</label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="BrandID"
                        value={formData.BrandID}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                        placeholder="Enter brand ID"
                        required
                      />
                      <Tag className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">MRP</label>
                    <div className="relative group">
                      <input
                        type="number"
                        name="MRP"
                        value={formData.MRP}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                        placeholder="Enter MRP"
                        required
                      />
                      <DollarSign className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Discount</label>
                    <div className="relative group">
                      <input
                        type="text"
                        name="ProductDiscount"
                        value={formData.ProductDiscount}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                        placeholder="Enter discount (e.g., 20%)"
                        required
                      />
                      <Tag className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <div className="relative group">
                      <select
                        name="Gender"
                        value={formData.Gender}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300 appearance-none"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unisex">Unisex</option>
                      </select>
                      <Users className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
                <div className="relative group">
                  <textarea
                    name="ProductDescription"
                    value={formData.ProductDescription}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                    placeholder="Enter product description"
                    required
                  />
                  <Info className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Variants Section */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Layers className="h-6 w-6 mr-3 text-blue-600" />
                  Product Variants
                </h2>
                <button
                  type="button"
                  onClick={addVariant}
                  className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Variant
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {variants.map((variant, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 relative border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-500 bg-white px-4 py-1.5 rounded-full shadow-sm">
                          Variant {index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                      {/* Left side - Variant Details */}
                      <div className="col-span-12 lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="relative group">
                            <label className="block text-xs font-medium text-gray-500 mb-1">Colour ID</label>
                            <div className="relative">
                              <input
                                type="text"
                                value={variant.ColourID}
                                onChange={(e) => handleVariantChange(index, 'ColourID', e.target.value)}
                                className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                                placeholder="Colour ID"
                                required
                              />
                              <Palette className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                            </div>
                          </div>

                          <div className="relative group">
                            <label className="block text-xs font-medium text-gray-500 mb-1">Attribute Values</label>
                            <div className="relative">
                              <input
                                type="text"
                                value={variant.AttributeValues.join(', ')}
                                onChange={(e) => handleVariantChange(index, 'AttributeValues', e.target.value)}
                                className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                                placeholder="Values (comma-separated)"
                                required
                              />
                              <Layers className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                            </div>
                          </div>

                          <div className="relative group">
                            <label className="block text-xs font-medium text-gray-500 mb-1">Quantity</label>
                            <div className="relative">
                              <input
                                type="number"
                                value={variant.Quantity}
                                onChange={(e) => handleVariantChange(index, 'Quantity', e.target.value)}
                                className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                                placeholder="Quantity"
                                required
                              />
                              <Hash className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                            </div>
                          </div>

                          <div className="relative group">
                            <label className="block text-xs font-medium text-gray-500 mb-1">Selling Price</label>
                            <div className="relative">
                              <input
                                type="number"
                                value={variant.SellingPrice}
                                onChange={(e) => handleVariantChange(index, 'SellingPrice', e.target.value)}
                                className="w-full pl-10 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-300"
                                placeholder="Price"
                                required
                              />
                              <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Image Upload */}
                      <div className="col-span-12 lg:col-span-4">
                        <div className="relative group">
                          <label className="block text-xs font-medium text-gray-500 mb-1">Images</label>
                          <VariantImageUpload variantIndex={index} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 text-lg font-medium"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm; 