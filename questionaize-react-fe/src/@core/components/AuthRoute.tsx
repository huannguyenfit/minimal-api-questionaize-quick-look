
import { useAuth } from '@core/contexts/AuthProvider';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import cookie from 'react-cookies'
export const AuthRoute = () => {
  //  const { isAuthenticated } = useAuth();
  const isAuthenticated = cookie.load('AUTH_DATA');
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
}