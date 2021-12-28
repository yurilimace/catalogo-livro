import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';

const NavbarDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="primary"
        className="d-inline-block align-middle ml-3"
      >
        <FaRegUserCircle className="me-1" size={25} />
        <span className="d-inline-block align-middle ml-3"> UserName </span>
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarDropdown;
