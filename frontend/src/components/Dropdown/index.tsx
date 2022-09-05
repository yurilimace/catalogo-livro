import React from "react";
import { useRecoilState } from "recoil";
import { userAuthenticateState } from "../../store/UserAuthenticate/userAuthenticate.atom";
import { FaSignOutAlt, FaUserAlt, FaPlus } from "react-icons/fa";
import { Dropdown, DropdownItem } from "./styled";
import { modalManager } from "../../store/Modal/modalManager.atom";

export const DropdownMenu = ({ active }: any) => {
  const menu = ["Meus dados", "Sair"];
  const [userHasToken, setUserHasToken] = useRecoilState(userAuthenticateState);
  const Logout = () => {
    localStorage.clear();
    setUserHasToken(null);
  };

  return (
    <Dropdown active={active}>
      <DropdownItem>
        <div>
          <FaUserAlt />
        </div>
        <div>
          <span> Meus Dados </span>
        </div>
      </DropdownItem>
      <DropdownItem onClick={Logout}>
        <div>
          <FaSignOutAlt />
        </div>
        <div>
          <span> Sair </span>
        </div>
      </DropdownItem>

      {/* {menu.map((m, index) => (
        <DropdownItem key={index}> {m} </DropdownItem>
      ))} */}
    </Dropdown>
  );
};
