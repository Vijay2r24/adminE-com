import React from 'react';
import Card, { CardHeader, CardContent } from '../ui/Card';

const mockActivities = [
  {
    id: '1',
    description: (
      <span>
        <span className="font-medium">John Doe</span> added a new product <span className="font-medium">Wireless Headphones</span>
      </span>
    ),
    timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
  },
  {
    id: '2',
    description: (
      <span>
        <span className="font-medium">Order #1234</span> status changed to <span className="text-emerald-600 font-medium">delivered</span>
      </span>
    ),
    timestamp: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
  },
  {
    id: '3',
    description: (
      <span>
        <span className="font-medium">Sarah Johnson</span> created a new account
      </span>
    ),
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: '4',
    description: (
      <span>
        <span className="font-medium">New Review:</span> ★★★★★ for <span className="font-medium">Bluetooth Speaker</span>
      </span>
    ),
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3) // 3 hours ago
  },
  {
    id: '5',
    description: (
      <span>
        <span className="text-amber-600 font-medium">Low stock alert</span> for <span className="font-medium">Smart Watch</span>
      </span>
    ),
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
  }
];

const getTimeAgo = (date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + ' years ago';
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' months ago';
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' days ago';
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' hours ago';
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' minutes ago';
  
  return Math.floor(seconds) + ' seconds ago';
};

const RecentActivity = () => {
  return (
    <Card className="overflow-hidden h-full">
      <CardHeader>
        <h3 className="text-lg font-medium">Recent Activity</h3>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-200">
          {mockActivities.map((activity) => (
            <li key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">{activity.description}</p>
                    <p className="text-xs text-gray-500">{getTimeAgo(activity.timestamp)}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity; 