import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ShoppingBag, ArrowRight, Star, Shield, Truck, CreditCard, Gift, Tag, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Dummy login credentials
    const dummyCredentials = {
      email: 'vijay@b2y.com',
      password: 'demo123'
    };

    try {
      // Simulate API call with dummy credentials
      if (formData.email === dummyCredentials.email && formData.password === dummyCredentials.password) {
        // Simulate successful login
        const dummyToken = 'dummy-jwt-token-123456';
        localStorage.setItem('token', dummyToken);
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Try demo@example.com / demo123');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  const mockProducts = [
    {
      id: 'p1',
      name: 'Wireless Mouse',
      sku: 'WM-001',
      brand: 'Logitech',
      category: 'Accessories',
      price: 29.99,
      stock: 120,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=80&h=80&fit=crop&auto=format',
    },
    {
      id: 'p2',
      name: 'Mechanical Keyboard',
      sku: 'MK-002',
      brand: 'Keychron',
      category: 'Accessories',
      price: 89.99,
      stock: 60,
      image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=80&h=80&fit=crop&auto=format',
    },
    {
      id: 'p3',
      name: '27" 4K Monitor',
      sku: 'MON-003',
      brand: 'Dell',
      category: 'Monitors',
      price: 349.99,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=80&h=80&fit=crop&auto=format',
    },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">
      {/* Left Side - Promotional Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B45E0] to-[#4c39c7]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">ShopEase</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Your Ultimate<br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Shopping Experience
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
              Discover a world of premium products, exclusive deals, and seamless shopping. Join our community of satisfied customers.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold block">Premium Quality</span>
                  <span className="text-sm text-white/70">Top Brands</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold block">Secure Shopping</span>
                  <span className="text-sm text-white/70">100% Safe</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center shadow-lg">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold block">Fast Delivery</span>
                  <span className="text-sm text-white/70">Free Shipping</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center shadow-lg">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-semibold block">Special Offers</span>
                  <span className="text-sm text-white/70">Daily Deals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-50 via-white to-white"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiM1QjQ1RTAiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-md w-full space-y-4 relative">
          {/* Login Form Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 transform hover:scale-[1.01] transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#5B45E0] to-[#4c39c7] mb-3 shadow-lg">
                <ShoppingBag className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back!</h2>
              <p className="text-gray-600 text-sm">
                Login in to continue to your account
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-600 px-3 py-2 rounded-lg text-sm flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <div className="relative group">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-[#5B45E0] transition-colors" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      className="appearance-none block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 bg-white text-sm"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400 group-focus-within:text-[#5B45E0] transition-colors" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="appearance-none block w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] transition-all duration-200 bg-white text-sm"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-3.5 w-3.5 text-[#5B45E0] border-gray-300 rounded focus:ring-[#5B45E0]"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-700">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-xs font-medium text-[#5B45E0] hover:text-[#4c39c7] transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#5B45E0] to-[#4c39c7] hover:from-[#4c39c7] hover:to-[#5B45E0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200 transform hover:scale-[1.02] group shadow-lg"
              >
                <span className="mr-2">Login</span>
              </button>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center items-center py-2 px-3 border border-gray-200 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200 transform hover:scale-[1.02] group"
                  >
                    <img
                      className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google logo"
                    />
                    Google
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center items-center py-2 px-3 border border-gray-200 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all duration-200 transform hover:scale-[1.02] group"
                  >
                    <img
                      className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform"
                      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                      alt="Facebook logo"
                    />
                    Facebook
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  className="font-medium text-[#5B45E0] hover:text-[#4c39c7] transition-colors"
                >
                  Create an account
                </button>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center space-x-1 text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <Shield className="h-4 w-4 text-[#5B45E0]" />
              <span className="text-xs font-medium">Secure Login</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              <Lock className="h-4 w-4 text-[#5B45E0]" />
              <span className="text-xs font-medium">Privacy Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 