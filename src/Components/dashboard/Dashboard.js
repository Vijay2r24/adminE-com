import React from 'react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Package, 
  ArrowUp, 
  ArrowDown,
  Star,
  Clock,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for the dashboard
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$24,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Total Customers',
      value: '856',
      change: '+5.3%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Average Order Value',
      value: '$89.50',
      change: '-2.4%',
      trend: 'down',
      icon: TrendingUp,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      date: '2024-03-15',
      amount: '$245.00',
      status: 'Delivered',
      items: 3
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      date: '2024-03-15',
      amount: '$189.50',
      status: 'Processing',
      items: 2
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      date: '2024-03-14',
      amount: '$320.75',
      status: 'Shipped',
      items: 4
    },
    {
      id: 'ORD-004',
      customer: 'Sarah Wilson',
      date: '2024-03-14',
      amount: '$145.25',
      status: 'Pending',
      items: 1
    }
  ];

  const topProducts = [
    {
      name: 'Wireless Headphones',
      sales: 245,
      revenue: '$24,500',
      rating: 4.8,
      stock: 45
    },
    {
      name: 'Smart Watch',
      sales: 189,
      revenue: '$18,900',
      rating: 4.6,
      stock: 32
    },
    {
      name: 'Laptop Backpack',
      sales: 156,
      revenue: '$7,800',
      rating: 4.9,
      stock: 28
    }
  ];

  const lowStockItems = [
    {
      name: 'Wireless Mouse',
      stock: 5,
      threshold: 10
    },
    {
      name: 'Mechanical Keyboard',
      stock: 3,
      threshold: 15
    },
    {
      name: 'USB-C Hub',
      stock: 2,
      threshold: 20
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-2">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">E-commerce Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your store's performance and recent activity
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <metric.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {metric.trend === 'up' ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`ml-2 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </span>
              <span className="ml-2 text-sm text-gray-500">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <div key={order.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {order.status}
                    </span>
                    <span className="text-sm text-gray-500">{order.items} items</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {topProducts.map((product, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <div className="mt-1 flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                      <p className="text-sm text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <Package className="h-4 w-4 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-500">
                        {product.stock} in stock
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Low Stock Alert</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {lowStockItems.map((item, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.stock} left (min: {item.threshold})
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-[#5B45E0] hover:text-[#4c39c7]">
                      Restock
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 