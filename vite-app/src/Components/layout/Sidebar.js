import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, ShoppingCart, Package, Settings, Bell, User, Store, X, Menu, Image } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Product Setup', href: '/browse', icon: Settings },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Products', href: '/productList', icon: Package },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Stores', href: '/stores', icon: Store },
  { name: 'Banners', href: '/banners', icon: Image },
  { name: 'Notifications', href: '/notifications', icon: Bell },
];

const Sidebar = ({ onClose, isCollapsed, onToggle }) => {
  const location = useLocation();

  return (
    <div className={`h-full ${isCollapsed ? 'w-16' : 'w-64'} bg-sidebar-bg shadow-2xl rounded-r-2xl transition-all duration-300 bg-gradient-to-b from-white/10 to-[#FF5A5F]/10`}>
      <div className="flex flex-col h-full">
        {/* Toggle/Menu Button */}
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} h-16 px-2 ${isCollapsed ? '' : 'px-6'} border-b border-white/10`}>
          <button
            onClick={onToggle}
            className="p-2 text-[#FF5A5F] hover:text-white hover:bg-[#FF5A5F]/20 rounded-lg transition-colors duration-200"
            title={isCollapsed ? 'Expand menu' : 'Collapse menu'}
          >
            <Menu className="h-6 w-6" />
          </button>
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-[#FF5A5F] ml-2 tracking-wide">E-Shop Admin</h1>
          )}
          {!isCollapsed && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-[#FF5A5F]/60 hover:text-white hover:bg-[#FF5A5F]/20 rounded-lg transition-colors duration-200"
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
                  flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'px-0' : 'px-4'} py-2.5 text-sm font-semibold rounded-xl transition-all duration-200
                  ${isActive
                    ? 'bg-[#FF5A5F] text-white shadow-md'
                    : 'text-[#FF5A5F] hover:bg-[#FF5A5F]/10 hover:text-[#FF5A5F]'
                  }
                `}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon
                  className={`flex-shrink-0 h-5 w-5 ${isCollapsed ? '' : 'mr-2'} ${isActive ? 'text-white' : 'text-[#FF5A5F]'}`}
                  aria-hidden="true"
                />
                {!isCollapsed && <span className="truncate">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;