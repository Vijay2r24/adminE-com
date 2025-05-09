import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, ShoppingCart, Package, Settings, Bell, User, Store, X, Menu } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Product Setup', href: '/browse', icon: Settings },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Products', href: '/productList', icon: Package },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Stores', href: '/stores', icon: Store },
  { name: 'Notifications', href: '/notifications', icon: Bell },
];

const Sidebar = ({ onClose, isCollapsed, onToggle }) => {
  const location = useLocation();

  return (
    <div className={`h-full ${isCollapsed ? 'w-16' : 'w-64'} bg-[#5B45E0] shadow-xl transition-all duration-300`}>
      <div className="flex flex-col h-full">
        {/* Toggle/Menu Button */}
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} h-16 px-2 ${isCollapsed ? '' : 'px-6'} border-b border-white/10`}>
          <button
            onClick={onToggle}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            title={isCollapsed ? 'Expand menu' : 'Collapse menu'}
          >
            <Menu className="h-6 w-6" />
          </button>
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-white ml-2">E-Shop Admin</h1>
          )}
          {!isCollapsed && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className={`flex-1 ${isCollapsed ? 'px-2 py-4' : 'px-4 py-4'} space-y-1 overflow-y-auto`}>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={`
                  flex items-center ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'px-0' : 'px-4'} py-2.5 text-sm font-medium rounded-lg transition-colors duration-200
                  ${isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                  }
                `}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon
                  className={`flex-shrink-0 h-5 w-5 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-white' : 'text-white/60'}`}
                  aria-hidden="true"
                />
                {!isCollapsed && item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;