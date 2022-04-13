import React from "react";
import { Navbar, NavItem } from "./styled";
import { Grid } from "../Grid/styled";
import { FaBook } from "react-icons/fa";
import { DropdownMenu } from "../Dropdown";

export const StyledNavbar = () => {
  const [selectedMenu, setSelectedMenu] = React.useState("0");
  const [showDropdown, setShowDropdonw] = React.useState(false);

  const handleShowDropdown = () => {
    setShowDropdonw(!showDropdown);
    setSelectedMenu("4");
  };

  return (
    <Navbar active={selectedMenu}>
      <NavItem onClick={() => setSelectedMenu("1")}>
        <FaBook color="white" size={25} />
      </NavItem>
      <NavItem onClick={() => setSelectedMenu("2")} aria-hidden="true">
        Menu 1
      </NavItem>
      <NavItem onClick={() => setSelectedMenu("3")}>Menu 2</NavItem>
      <NavItem onClick={() => handleShowDropdown()}>
        Controlador
        {showDropdown && <DropdownMenu active={showDropdown} />}{" "}
      </NavItem>

      {/* <Grid columnTemplate={"0fr 0.1fr 0.1fr 0.5fr"}>
        <div>
          <FaBook color="white" size={25} />
        </div>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div> Controlador </div>
      </Grid> */}
    </Navbar>
  );
};
