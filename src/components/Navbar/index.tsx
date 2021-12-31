import React, { useContext } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaBookOpen } from 'react-icons/fa';
import NavbarDropdown from '../navbardropdown/index';
import { SideMenuContext } from '../../context/sidemenuContext';

const NavBar = () => {
  const sidebarContext = useContext(SideMenuContext);
  return (
    <Navbar variant="dark" bg="primary">
      <Container fluid>
        <Navbar.Brand
          data-cy="sidemenuController"
          className="navbarLogoCursor"
          onClick={() => {
            return sidebarContext.setShow(!sidebarContext.show);
          }}
        >
          <FaBookOpen size={25} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavbarDropdown />
      </Container>
    </Navbar>
  );
};

export default NavBar;
