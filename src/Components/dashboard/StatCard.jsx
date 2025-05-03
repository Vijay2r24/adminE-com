import React from 'react';
import Card from '../ui/Card';

const StatCard = ({ 
  title, 
  value, 
  icon, 
  trend,
  className = '' 
}) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="p-2 bg-indigo-50 rounded-full text-indigo-600">
            {icon}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-semibold">{value}</p>
          {trend && (
            <p className={`mt-2 text-sm flex items-center ${
              trend.isPositive ? 'text-emerald-600' : 'text-red-600'
            }`}>
              <span>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="ml-1 text-gray-500">from last month</span>
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard; 