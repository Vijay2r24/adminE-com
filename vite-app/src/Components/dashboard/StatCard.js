import React from 'react';
import Card from '../ui/Card';

const StatCard = ({ title, value, icon: Icon, trend, change }) => {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-4 right-4 text-gray-300">
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        {trend && change && (
          <p className={`mt-2 flex items-center text-sm ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change}
          </p>
        )}
      </div>
    </Card>
  );
};

export default StatCard; 