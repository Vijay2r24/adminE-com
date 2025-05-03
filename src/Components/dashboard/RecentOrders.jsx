import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import Card, { CardHeader, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';

const mockOrders = [
  {
    id: 'ORD-1234',
    customer: 'John Smith',
    total: 129.99,
    status: 'delivered',
    date: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: 'ORD-1233',
    customer: 'Sarah Johnson',
    total: 89.95,
    status: 'shipped',
    date: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
  },
  {
    id: 'ORD-1232',
    customer: 'Michael Davis',
    total: 159.99,
    status: 'processing',
    date: new Date(Date.now() - 1000 * 60 * 60 * 8) // 8 hours ago
  },
  {
    id: 'ORD-1231',
    customer: 'Emily Wilson',
    total: 49.99,
    status: 'pending',
    date: new Date(Date.now() - 1000 * 60 * 60 * 12) // 12 hours ago
  }
];

const getStatusBadgeVariant = (status) => {
  const variants = {
    pending: 'warning',
    processing: 'secondary',
    shipped: 'secondary',
    delivered: 'success',
    canceled: 'danger'
  };
  return variants[status] || 'default';
};

const RecentOrders = () => {
  return (
    <Card className="overflow-hidden h-full">
      <CardHeader>
        <h3 className="text-lg font-medium">Recent Orders</h3>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {mockOrders.map((order) => (
            <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.customer}</p>
                </div>
                <Badge variant={getStatusBadgeVariant(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="font-medium">${order.total.toFixed(2)}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>
                    {order.date.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  <span className="mx-1">•</span>
                  <Calendar size={14} className="mr-1" />
                  <span>
                    {order.date.toLocaleDateString([], {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrders; 