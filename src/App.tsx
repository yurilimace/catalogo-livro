import React from 'react';
// import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import Router from './routes';
import { SideMenuContextProvider } from './context/sidemenuContext';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SideMenuContextProvider>
        <Router />
      </SideMenuContextProvider>
    </QueryClientProvider>
  );
};

export default App;
