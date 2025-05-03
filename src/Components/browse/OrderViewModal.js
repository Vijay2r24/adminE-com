import React from 'react';
import {
  X,
  Package,
  Truck,
  User,
  MapPin,
  CreditCard,
  Calendar,
  Printer,
  ArrowLeft,
  Clock,
  Phone,
  Mail,
  Edit,
  Trash,
  ChevronRight,
  Building
} from 'lucide-react';

const OrderViewModal = ({ order, isOpen, onClose }) => {
  // Guard clause to prevent rendering if modal is not open or order is not provided
  if (!isOpen || !order) return null;

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      processing: 'bg-blue-100 text-blue-800 border-blue-200',
      shipped: 'bg-purple-100 text-purple-800 border-purple-200',
      delivered: 'bg-green-100 text-green-800 border-green-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    };
    return colors[status] || colors.pending;
  };

  const handlePrint = () => {
    window.print();
  };

  // Ensure we have an array of items to display
  const orderItems = order.products || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/50 backdrop-blur-sm print:bg-white">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 print:hidden"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-500" />
                </button>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
                  <p className="mt-1 text-sm text-gray-500">Order #{order.orderNumber || order.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full border ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status?.charAt(0).toUpperCase() + order.status?.slice(1)}
                </span>
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 print:hidden"
                  title="Print Order"
                >
                  <Printer className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 print:hidden"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Customer & Delivery */}
              <div className="lg:col-span-5 space-y-4">
                {/* Order Summary Card */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-[#5B45E0]/10 rounded-lg">
                      <Package className="h-5 w-5 text-[#5B45E0]" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900">Order Summary</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Order Date</span>
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-4 w-4 mr-1.5 text-gray-400" />
                        {order.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Order Time</span>
                      <div className="flex items-center text-sm text-gray-900">
                        <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                        {order.orderDate ? new Date(order.orderDate).toLocaleTimeString() : 'N/A'}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-sm text-gray-900">Total Amount</span>
                        <span className="text-base text-[#5B45E0]">${order.total?.toFixed(2) || '0.00'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900">Customer Details</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {order.customer?.name ? order.customer.name.split(' ').map(n => n[0]).join('') : '?'}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.customer?.name || 'N/A'}</p>
                        <p className="text-xs text-gray-500">Customer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-900">{order.customer?.email || 'N/A'}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-900">{order.customer?.phone || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900">Delivery Information</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Building className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-900">{order.delivery?.address || 'N/A'}</p>
                        <p className="text-xs text-gray-500">
                          {order.delivery ? `${order.delivery.city}, ${order.delivery.state} ${order.delivery.zipCode}` : 'N/A'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-900">Standard Delivery</p>
                        <p className="text-xs text-gray-500">2-4 Business Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Products */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="px-5 py-4 border-b border-gray-100">
                    <h4 className="text-base font-semibold text-gray-900">Order Items</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                          </th>
                          <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                          </th>
                          <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th scope="col" className="px-5 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orderItems.map((item) => (
                          <tr key={item?.id || item?.name}>
                            <td className="px-5 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                  {item.image ? (
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">
                                      N/A
                                    </div>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{item.name || 'Unnamed Product'}</div>
                                  <div className="text-xs text-gray-500">{item.sku || 'No SKU'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">
                              ${item.price?.toFixed(2) || '0.00'}
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.quantity || 1}
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-900">
                              ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                            </td>
                            <td className="px-5 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                              <button className="text-blue-600 hover:text-blue-900" title="Edit">
                                <Edit className="w-4 h-4 inline" />
                              </button>
                              <button className="text-red-600 hover:text-red-900" title="Delete">
                                <Trash className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                      <tfoot className="bg-gray-50">
                        <tr>
                          <td colSpan="5" className="px-5 py-4">
                            <div className="flex justify-end space-x-4">
                              <div className="text-sm text-gray-500">
                                Subtotal: <span className="font-medium text-gray-900">${order.total?.toFixed(2) || '0.00'}</span>
                              </div>
                              <div className="text-sm text-gray-500">
                                Tax: <span className="font-medium text-gray-900">$0.00</span>
                              </div>
                              <div className="text-sm text-gray-900 font-medium">
                                Total: <span className="text-[#5B45E0]">${order.total?.toFixed(2) || '0.00'}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewModal; 