import React, { useContext } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { SideMenuContext } from '../../context/sidemenuContext';

const NavBar = () => {
  const sidebarContext = useContext(SideMenuContext);

  return (
    <div
      className={
        sidebarContext.show === false
          ? 'w-100 d-flex flex-column'
          : 'teste d-flex flex-column'
      }
    >
      <Navbar variant="dark" bg="primary">
        <Container fluid>
          <Navbar.Brand href="#">Aqui vai a Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button
              variant="secondary"
              onClick={() => {
                return sidebarContext.setShow(!sidebarContext.show);
              }}
            >
              teste
            </Button>
            <Nav className="me-auto">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2> Teste </h2>
    </div>
  );
};

export default NavBar;
