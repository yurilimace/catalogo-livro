import React from 'react';
// import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import PageTemplate from './components/pageTemplate';
import SideMenu from './components/sidemenu';
import { SideMenuContextProvider } from './context/sidemenuContext';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenuContextProvider>
        <SideMenu />
        <PageTemplate>
          <h2> Conteudo da Pagina </h2>
        </PageTemplate>
      </SideMenuContextProvider>
    </div>
  );
};

export default App;
