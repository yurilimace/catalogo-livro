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
          : 'navbarWidth d-flex flex-column'
      }
    >
      <NavBar />
      <div className="p-3">{children}</div>
    </div>
  );
};

export default PageTemplate;
