import React from "react";
import { Navbar, NavItem } from "./styled";

import { FaBook } from "react-icons/fa";
import { DropdownMenu } from "../Dropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const StyledNavbar = () => {
  const [selectedMenu, setSelectedMenu] = React.useState("0");
  const [showDropdown, setShowDropdonw] = React.useState(false);
  const navigate = useNavigate();
  const ref = React.useRef(null);

  const handleShowDropdown = () => {
    setShowDropdonw(!showDropdown);
    setSelectedMenu("4");
  };

  const handleNavigate = (menuPosition: string, path: string) => {
    setSelectedMenu(menuPosition);
    navigate(path);
    setShowDropdonw(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", () => setShowDropdonw(false));
    return () => {
      document.removeEventListener("mousedown", () => setShowDropdonw(false));
    };
  }, [ref]);

  return (
    <Navbar active={selectedMenu}>
      <NavItem onClick={() => handleNavigate("1", "/")}>
        <FaBook color="white" size={25} />
      </NavItem>
      <NavItem onClick={() => handleNavigate("2", "/menu1")} aria-hidden="true">
        <div> Coleção </div>
      </NavItem>
      <NavItem onClick={() => handleNavigate("3", "/menu2")}>
        <div> Pilha de Leitura </div>
      </NavItem>
      <NavItem
        tabIndex={0}
        onFocus={(e) => console.log(e.target)}
        onClick={() => handleShowDropdown()}
        ref={ref}
      >
        Controlador
        {showDropdown && <DropdownMenu active={showDropdown} />}{" "}
      </NavItem>
    </Navbar>
  );
};
