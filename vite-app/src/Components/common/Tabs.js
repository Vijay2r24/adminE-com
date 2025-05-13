import React from 'react';

export const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <nav className="flex -mb-px px-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              relative whitespace-nowrap py-4 px-6 font-medium text-sm transition-all duration-200
              ${activeTab === tab.id
                ? 'text-[#5B45E0]'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5B45E0] transform transition-transform duration-200" />
            )}
            <div className={`
              absolute inset-0 bg-[#5B45E0] opacity-0 transition-opacity duration-200
              ${activeTab === tab.id ? 'opacity-5' : 'hover:opacity-5'}
            `} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export const Tab = ({ children, isActive }) => {
  if (!isActive) return null;
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}; 