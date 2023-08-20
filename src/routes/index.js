import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from '../pages/auth/signup';
import Login from '../pages/auth/login';
import Home from '../pages/home';
import Landing from '../pages/home/landing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/landing" />} />
    </Routes>
  );
};

export default AppRoutes;