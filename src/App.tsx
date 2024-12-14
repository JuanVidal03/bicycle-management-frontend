import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/public.routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PublicRoutes/>
    </BrowserRouter>
  );
};

export default App;
