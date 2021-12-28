import React, { useContext } from 'react';
import NavBar from '../Navbar';
import { SideMenuContext } from '../../context/sidemenuContext';
import SideMenu from '../sidemenu';

const PageTemplate: React.FC = ({ children }) => {
  const sidebarContext = useContext(SideMenuContext);
  return (
    <div className="d-flex">
      <SideMenu />
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
    </div>
  );
};

export default PageTemplate;
