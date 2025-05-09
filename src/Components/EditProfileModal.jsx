import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

const EditProfileModal = ({ open, onClose, user }) => {
  const initialProfile = user || {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    avatar: '',
  };
  const [profile, setProfile] = useState(initialProfile);
  const [avatarPreview, setAvatarPreview] = useState('');

  useEffect(() => {
    setProfile(user || initialProfile);
    setAvatarPreview(user && user.avatar ? user.avatar : '');
    // eslint-disable-next-line
  }, [user, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, avatar: file }));
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save profile changes (API call)
    alert('Profile updated successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-2xl relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white ring-2 ring-sky-200/50 transition-all duration-300 group-hover:scale-105">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar Preview" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">
                    <User className="h-10 w-10" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 p-2.5 bg-white rounded-full text-sky-500 hover:bg-sky-50 transition-all duration-200 border border-sky-200 hover:scale-110 cursor-pointer">
                <Camera className="h-5 w-5" />
                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400"><User className="h-4 w-4" /></span>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400"><Mail className="h-4 w-4" /></span>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400"><Phone className="h-4 w-4" /></span>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400"><MapPin className="h-4 w-4" /></span>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                  placeholder="Enter your address"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                placeholder="Enter your state"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={profile.zipCode}
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm"
                placeholder="Enter your ZIP code"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium hover:from-sky-400 hover:to-indigo-400 border border-sky-400/20"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal; 