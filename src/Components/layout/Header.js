import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        <div className="flex items-center flex-1">
          <button
            onClick={onMenuClick}
            className="md:hidden mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>

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

        <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default Header;
