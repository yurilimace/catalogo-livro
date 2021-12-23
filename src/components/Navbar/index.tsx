import React, { useContext } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { SideMenuContext } from '../../context/sidemenuContext';

const NavBar = () => {
  const sidebarContext = useContext(SideMenuContext);

  return (
    <div>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Aqui vai a Logo</Navbar.Brand>
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
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
