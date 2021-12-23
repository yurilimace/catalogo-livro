import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { SideMenuContext } from '../../context/sidemenuContext';

const SideMenu = () => {
  const sidebarContext = useContext(SideMenuContext);
  console.log(sidebarContext, 'valor hooks');
  return (
    <Offcanvas
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
  );
};

export default SideMenu;
