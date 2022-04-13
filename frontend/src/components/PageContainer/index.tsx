import React from "react";
import { StyledNavbar } from "../Navbar";
import { StyledContainer } from "./styled";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const PageContainer = ({ children, title }: Props) => {
  return (
    <StyledContainer>
      <StyledNavbar />
      {children}
    </StyledContainer>
  );
};
