import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Camera, Shield, Bell, Globe, Lock, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';
import cheGuevaraImg from '../assets/images/che-guevara.jpg';

const defaultUser = {
  name: "Guest User",
  email: "guest@example.com",
  phone: "Not provided",
  address: "Not provided",
  city: "Not provided",
  state: "Not provided",
  zipCode: "Not provided",
  joinDate: new Date().toISOString(),
  avatar: cheGuevaraImg,
  role: "Guest"
};

const securityPrefModals = {
  'changePassword': {
    title: 'Change Password',
    content: (
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
          <input type="password" className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm" placeholder="Enter current password" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input type="password" className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm" placeholder="Enter new password" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <input type="password" className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm" placeholder="Confirm new password" />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button type="button" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-medium" onClick={null}>Cancel</button>
          <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium hover:from-sky-400 hover:to-indigo-400 border border-sky-400/20">Save</button>
        </div>
      </form>
    )
  },
  'twoFactor': {
    title: 'Two-Factor Authentication',
    content: <div className="py-4">Two-factor authentication settings coming soon.</div>
  },
  'privacy': {
    title: 'Privacy Settings',
    content: <div className="py-4">Privacy settings coming soon.</div>
  },
  'notifications': {
    title: 'Notification Settings',
    content: <div className="py-4">Notification settings coming soon.</div>
  },
  'language': {
    title: 'Language & Region',
    content: <div className="py-4">Language & region settings coming soon.</div>
  },
};

const ProfileDetails = ({ user = defaultUser }) => {
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => setModalType(type);
  const handleCloseModal = () => setModalType(null);

  return (
    <div className="max-w-7xl mx-auto mt-5">
      {/* Header Section with Background */}
      <div className="relative rounded-2xl overflow-hidden mb-8 border border-sky-100/50">
        {/* Background with enhanced pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-transparent to-indigo-200/40" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Content */}
        <div className="relative px-8 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative group">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white ring-2 ring-sky-200/50 transition-all duration-300 group-hover:scale-105">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2.5 bg-white rounded-full text-sky-500 hover:bg-sky-50 transition-all duration-200 border border-sky-200 hover:scale-110">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-indigo-700 bg-clip-text text-transparent">{user.name}</h1>
              <p className="mt-1 text-sky-600 font-medium">{user.role}</p>
              <p className="mt-2 text-sm text-sky-500 flex items-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></span>
                Member since {new Date(user.joinDate).toLocaleDateString()}
              </p>
            </div>
            <div className="md:ml-auto">
              <button 
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg text-sm font-medium hover:from-sky-400 hover:to-indigo-400 transition-all duration-200 border border-sky-400/20"
                onClick={() => setEditOpen(true)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal open={editOpen} onClose={() => setEditOpen(false)} user={user} />
      {/* Security/Preferences Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{securityPrefModals[modalType].title}</h2>
            {securityPrefModals[modalType].content}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Personal Information */}
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Information Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-indigo-50 rounded-lg">
                    <User className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="mt-1 text-base text-gray-900">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-indigo-50 rounded-lg">
                    <Mail className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <p className="mt-1 text-base text-gray-900">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-indigo-50 rounded-lg">
                    <Phone className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone Number</p>
                    <p className="mt-1 text-base text-gray-900">{user.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-indigo-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Member Since</p>
                    <p className="mt-1 text-base text-gray-900">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Address Information</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2.5 bg-green-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Street Address</p>
                  <p className="mt-1 text-base text-gray-900">{user.address}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">City</p>
                  <p className="mt-1 text-base text-gray-900">{user.city}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">State</p>
                  <p className="mt-1 text-base text-gray-900">{user.state}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">ZIP Code</p>
                  <p className="mt-1 text-base text-gray-900">{user.zipCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Settings & Preferences */}
        <div className="space-y-8">
          {/* Security Settings Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group" onClick={() => handleOpenModal('changePassword')}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Key className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Change Password</span>
                </div>
                <Edit className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group" onClick={() => handleOpenModal('twoFactor')}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Shield className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Two-Factor Authentication</span>
                </div>
                <Edit className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group" onClick={() => handleOpenModal('privacy')}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Lock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Privacy Settings</span>
                </div>
                <Edit className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
          </div>

          {/* Preferences Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group" onClick={() => handleOpenModal('notifications')}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Bell className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Notification Settings</span>
                </div>
                <Edit className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group" onClick={() => handleOpenModal('language')}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
                    <Globe className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Language & Region</span>
                </div>
                <Edit className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails; 