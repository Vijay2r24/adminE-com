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
              className="absolute right-0 mt-2 w-80 rounded-2xl shadow-2xl border border-gray-100 z-50 bg-gradient-to-br from-white via-gray-50 to-indigo-50 animate-fade-in"
              style={{ minWidth: '20rem' }}
            >
              {/* Accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200 rounded-t-2xl" />
              <div className="p-4 border-b font-semibold text-gray-800 flex items-center gap-2">
                <Bell className="h-5 w-5 text-indigo-500" /> Notifications
              </div>
              <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100">
                {mockNotifications.length === 0 ? (
                  <li className="p-4 text-gray-500 text-sm">No notifications</li>
                ) : (
                  mockNotifications.map((n) => (
                    <li
                      key={n.id}
                      className="flex items-start gap-3 p-4 hover:bg-indigo-50/60 transition-colors cursor-pointer group"
                    >
                      <span className="mt-1">
                        <Dot className="h-5 w-5 text-indigo-400 group-hover:text-indigo-600" />
                      </span>
                      <div className="flex-1">
                        <div className="text-sm text-gray-900 font-medium">{n.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div className="p-3 text-center border-t bg-gradient-to-r from-white via-gray-50 to-indigo-50 rounded-b-2xl">
                <a href="/notifications" className="text-indigo-600 text-sm font-medium hover:underline">View all</a>
              </div>
            </div>
          )}
          {/* User Profile in Header */}
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200 ml-4">
            <img
              className="h-10 w-10 rounded-full border-2 border-gray-200"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
