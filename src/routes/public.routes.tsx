import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../modules/auth/login/Index';
import Register from '../modules/auth/register/Index';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
};

export default PublicRoutes;
