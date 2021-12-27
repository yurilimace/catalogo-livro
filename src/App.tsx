import React from 'react';
// import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import NavBar from './components/Navbar';
import SideMenu from './components/sidemenu';
import { SideMenuContextProvider } from './context/sidemenuContext';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenuContextProvider>
        <SideMenu />

        <NavBar />
      </SideMenuContextProvider>
    </div>
  );
};

export default App;
