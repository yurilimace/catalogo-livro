import React from "react";
import { useRecoilState } from "recoil";
import { userAuthenticateState } from "../../store/UserAuthenticate/userAuthenticate.atom";
import { Dropdown, DropdownItem } from "./styled";

export const DropdownMenu = ({ active }: any) => {
  const menu = ["Meus dados", "Sair"];
  const [userHasToken, setUserHasToken] = useRecoilState(userAuthenticateState);
  const Logout = async () => {
    await localStorage.clear();
    setUserHasToken(null);
  };

  return (
    <Dropdown active={active} className="open">
      <DropdownItem>Meus Dados</DropdownItem>
      <DropdownItem onClick={Logout}>Sair</DropdownItem>

      {/* {menu.map((m, index) => (
        <DropdownItem key={index}> {m} </DropdownItem>
      ))} */}
    </Dropdown>
  );
};
