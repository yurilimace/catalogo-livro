import React, { useContext } from 'react';
import NavBar from '../Navbar';
import { SideMenuContext } from '../../context/sidemenuContext';

const PageTemplate: React.FC = ({ children }) => {
  const sidebarContext = useContext(SideMenuContext);
  return (
    <div
      className={
        sidebarContext.show === false
          ? 'w-100 d-flex flex-column'
          : 'teste d-flex flex-column'
      }
    >
      <NavBar />
      {children}
    </div>
  );
};

export default PageTemplate;
