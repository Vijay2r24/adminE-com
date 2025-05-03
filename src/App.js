import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Browse from './Components/browse/Browse';
import Dashboard from './Components/dashboard/Dashboard';
import Users from './Components/pages/Users';
import Orders from './Components/browse/OrderList';
import AddUser from './Components/pages/AddUser';
import ProductList from './Components/browse/Products/ProductList';
import Addproduct from './Components/browse/Products/AddProductForm'
import ProfileDetails from './Components/ProfileDetails';
import Stores from './Components/pages/Stores';
import AddStore from './Components/pages/AddStore';
import Notifications from './Components/pages/Notifications';
import Login from './Components/auth/Login';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // Add your authentication check logic here
  const isAuthenticated = localStorage.getItem('token'); // Example check
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Layout>{children}</Layout>;
};

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/browse" element={
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      } />
      <Route path="/users" element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>
      } />
      <Route path="/orders" element={
        <ProtectedRoute>
          <Orders />
        </ProtectedRoute>
      } />
      <Route path="/add-user" element={
        <ProtectedRoute>
          <AddUser />
        </ProtectedRoute>
      } />
      <Route path="/productList" element={
        <ProtectedRoute>
          <ProductList />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfileDetails />
        </ProtectedRoute>
      } />
      <Route path="/stores" element={
        <ProtectedRoute>
          <Stores />
        </ProtectedRoute>
      } />
      <Route path="/add-store" element={
        <ProtectedRoute>
          <AddStore />
        </ProtectedRoute>
      } />
      <Route path="/notifications" element={
        <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      } />
      <Route path="/Addproduct" element={
        <ProtectedRoute>
          <Addproduct />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;
