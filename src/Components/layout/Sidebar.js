import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, ShoppingCart, Package, Settings, Bell, User, Store, X } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Browse', href: '/browse', icon: Package },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Products', href: '/productList', icon: Package },
  { name: 'Add Products', href: '/Addproduct', icon: Package },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Stores', href: '/stores', icon: Store },
  { name: 'Notifications', href: '/notifications', icon: Bell },
];

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="h-full w-64 bg-[#5B45E0] shadow-xl">
      <div className="flex flex-col h-full">
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-white">E-Shop Admin</h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="px-6 py-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <img
              className="h-10 w-10 rounded-full border-2 border-white/20"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-white/60">admin</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={`
                  flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200
                  ${isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <Icon
                  className={`
                    mr-3 flex-shrink-0 h-5 w-5
                    ${isActive ? 'text-white' : 'text-white/60'}
                  `}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 