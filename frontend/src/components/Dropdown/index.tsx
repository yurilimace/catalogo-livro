import React from "react";
import { Dropdown, DropdownItem } from "./styled";

export const DropdownMenu = ({ active }: any) => {
  const menu = ["menu 1", "menu 2", "menu 3"];
  return (
    <Dropdown active={active} className="open">
      {menu.map((m, index) => (
        <DropdownItem key={index}> {m} </DropdownItem>
      ))}
    </Dropdown>
  );
};
