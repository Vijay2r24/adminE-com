import React, { useRef, useState, useEffect } from 'react';
import { Bell, Search, Menu, Dot } from 'lucide-react';

const mockNotifications = [
  { id: 1, title: 'Order #1234 delivered', time: '2 min ago' },
  { id: 2, title: 'New user registered', time: '10 min ago' },
  { id: 3, title: 'Stock running low for Laptop', time: '1 hour ago' },
];

const Header = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef();
  const dropdownRef = useRef();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef();
  const profileDropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    }
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        <div className="flex items-center flex-1">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                className="block w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>
        </div>

        <div className="relative flex items-center gap-4">
          <button
            ref={bellRef}
            className="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg"
            onClick={() => setShowNotifications((v) => !v)}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>
          {showNotifications && (
            <div
              ref={dropdownRef}
              className="fixed right-4 sm:right-6 top-16 w-full max-w-xs sm:w-80 sm:max-w-md rounded-2xl shadow-2xl border border-gray-100 z-50 bg-gradient-to-br from-white via-gray-50 to-indigo-50 animate-fade-in"
              style={{ minWidth: '0' }}
            >
              {/* Accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200 rounded-t-2xl" />
              <div className="p-3 sm:p-4 border-b font-semibold text-gray-800 flex items-center gap-2 text-base sm:text-lg">
                <Bell className="h-5 w-5 text-indigo-500" /> Notifications
              </div>
              <ul className="max-h-60 sm:max-h-64 overflow-y-auto divide-y divide-gray-100">
                {mockNotifications.length === 0 ? (
                  <li className="p-3 sm:p-4 text-gray-500 text-sm">No notifications</li>
                ) : (
                  mockNotifications.map((n) => (
                    <li
                      key={n.id}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-indigo-50/60 transition-colors cursor-pointer group"
                    >
                      <span className="mt-1">
                        <Dot className="h-5 w-5 text-indigo-400 group-hover:text-indigo-600" />
                      </span>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base text-gray-900 font-medium">{n.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div className="p-2 sm:p-3 text-center border-t bg-gradient-to-r from-white via-gray-50 to-indigo-50 rounded-b-2xl">
                <a href="/notifications" className="text-indigo-600 text-sm font-medium hover:underline">View all</a>
              </div>
            </div>
          )}
          {/* User Profile in Header */}
          <div className="relative flex items-center gap-2 pl-2 sm:pl-4 border-l border-gray-200 ml-2 sm:ml-4">
            <button
              ref={profileRef}
              className="flex items-center focus:outline-none"
              onClick={() => setShowProfileMenu((v) => !v)}
            >
              <img
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-gray-200"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
              <div className="hidden sm:block text-left ml-2">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">admin</div>
              </div>
            </button>
            {showProfileMenu && (
              <div
                ref={profileDropdownRef}
                className="absolute right-0 top-14 w-56 rounded-xl shadow-lg border border-gray-100 z-50 bg-white animate-fade-in overflow-hidden"
              >
                {/* Caret */}
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 z-10"></div>
                {/* Profile Header */}
                <div className="flex flex-col items-center pt-5 pb-3 px-4">
                  <img
                    className="h-12 w-12 rounded-full border border-gray-200 shadow-sm mb-2"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                  <div className="text-sm font-semibold text-gray-900">John Doe</div>
                  <div className="text-xs text-gray-500 mb-1">admin</div>
                </div>
                <div className="border-t border-gray-100">
                  <button className="w-full flex items-center gap-2 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition font-medium" onClick={() => { setShowProfileMenu(false); /* navigate to profile if needed */ }}>
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Your Profile
                  </button>
                  <button className="w-full flex items-center gap-2 px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition font-medium" onClick={() => { setShowProfileMenu(false); /* handle logout here */ }}>
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
