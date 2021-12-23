import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import NavBar from './components/Navbar';
import SideMenu from './components/sidemenu';
import { SideMenuContextProvider } from './context/sidemenuContext';

const App = () => {
  return (
    <div className="App">
      <SideMenuContextProvider>
        <NavBar />
        <SideMenu />
      </SideMenuContextProvider>

      <h2> Novo App Catalogo Agora vai </h2>
      <Button variant="primary"> Teste Botão </Button>
    </div>
  );
};

export default App;
