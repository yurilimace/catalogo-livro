import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { SideMenuContext } from '../../context/sidemenuContext';

const SideMenu = () => {
  const sidebarContext = useContext(SideMenuContext);

  if (!sidebarContext.show) {
    return null;
  }
  return (
    <div className="sidemenu">
      <Offcanvas
        className="sidemenu"
        show={sidebarContext.show}
        onHide={() => {
          return sidebarContext.setShow(false);
        }}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </div>
  );
};

export default SideMenu;
