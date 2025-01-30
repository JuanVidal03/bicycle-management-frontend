import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './utils/queryClient.ts';

import Loader from './views/Shared/Loader/Index.tsx';
const Login = lazy(() => import('./views/Auth/Login/Index.tsx'));
const Register = lazy(() => import('./views/Auth/Register/Index.tsx'));
const DashboardLayout = lazy(() => import('./layouts/Dashboard/Index.tsx'));
const Dashboard = lazy(() => import('./views/Dashboard/Index.tsx'));
const Bicycles = lazy(() => import('./views/Bicycles/Index.tsx'));
const Users = lazy(() => import('./views/Users/Index.tsx'));
const Events = lazy(() => import('./views/Events/Index.tsx'));


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div className='absolute top-0 left-0 z-50 w-screen h-screen flex justify-center items-center'><Loader/></div>}>
          <Routes>
            {/* public routes */}
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            {/* private routes */}
            <Route
              path='*'
              element={
                <DashboardLayout>
                  <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/bicycles' element={<Bicycles/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/events' element={<Events/>}/>
                  </Routes>
                </DashboardLayout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
