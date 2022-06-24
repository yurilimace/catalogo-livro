import React from "react";
import { Navbar, NavItem } from "./styled";

import { FaBook } from "react-icons/fa";
import { DropdownMenu } from "../Dropdown";
import { useNavigate } from "react-router-dom";

import { UserProfileNavbar } from "../UserProfileNavbar";

export const StyledNavbar = () => {
  const [selectedMenu, setSelectedMenu] = React.useState("0");
  const [showDropdown, setShowDropdonw] = React.useState(false);

  const navigate = useNavigate();
  //const location = useLocation();

  const ref = React.useRef<HTMLDivElement>(null);

  const handleShowDropdown = (event: any) => {
    setShowDropdonw(true);

    //setSelectedMenu("4");
  };

  const handleNavigate = (menuPosition: string, path: string) => {
    setSelectedMenu(menuPosition);
    navigate(path);
    setShowDropdonw(false);
  };

  const handleEventClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDropdonw(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => handleEventClick(e), false);
    return () => {
      document.removeEventListener(
        "mousedown",
        (e) => handleEventClick(e),
        false
      );
    };
  }, []);

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
        isDropdownOpen={showDropdown}
        onClick={(event: any) => handleShowDropdown(event)}
        ref={ref}
      >
        <UserProfileNavbar isOpen={showDropdown} />
        {showDropdown && <DropdownMenu active={showDropdown} />}{" "}
      </NavItem>
    </Navbar>
  );
};
