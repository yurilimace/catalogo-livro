import React from "react";
import { Dropdown, DropdownItem } from "./styled";

export const DropdownMenu = ({ active }: any) => {
  const menu = ["Meus dados", "Sair"];
  return (
    <Dropdown active={active} className="open">
      {menu.map((m, index) => (
        <DropdownItem key={index}> {m} </DropdownItem>
      ))}
    </Dropdown>
  );
};
