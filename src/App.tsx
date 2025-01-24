import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './utils/queryClient.ts';

const Login = lazy(() => import('./views/Auth/Login/Index.tsx'));
const Register = lazy(() => import('./views/Auth/Register/Index.tsx'));
import Loader from './views/Shared/Loader/Index.tsx';

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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>

  );
};

export default App;
