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
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 transform hover:scale-[1.01] transition-all duration-300 border border-gray-100">
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
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm transition-all duration-200 bg-white/80 placeholder-gray-400"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B45E0] focus:border-[#5B45E0] sm:text-sm transition-all duration-200 bg-white/80 placeholder-gray-400"
                      placeholder="Password"
                      value={formData.password}
                      onChange={e => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#5B45E0] transition-colors"
                      onClick={() => setShowPassword(v => !v)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={e => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="form-checkbox h-4 w-4 text-[#5B45E0] rounded focus:ring-[#5B45E0] border-gray-300"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-xs text-[#5B45E0] hover:underline font-medium"
                  onClick={() => alert('Forgot password?')}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 mt-2 bg-gradient-to-r from-[#5B45E0] to-[#4c39c7] text-white font-semibold rounded-lg shadow-lg hover:from-[#4c39c7] hover:to-[#5B45E0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition-all text-base"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="mx-3 text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-all text-sm font-medium text-gray-700"
                onClick={() => alert('Google login coming soon!')}
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                Sign in with Google
              </button>

              {/* Sign up prompt */}
              <div className="text-center mt-4 text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <a href="#" className="text-[#5B45E0] font-medium hover:underline">Sign up</a>
              </div>
            </form>
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