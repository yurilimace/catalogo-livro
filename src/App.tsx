import React from 'react';
// import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import Router from './routes';
import { SideMenuContextProvider } from './context/sidemenuContext';

const App = () => {
  return (
    <SideMenuContextProvider>
      <Router />
    </SideMenuContextProvider>
  );
};

export default App;
