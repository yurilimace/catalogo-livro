import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalManager } from "../../store/Modal/modalManager.atom";
import { AddTitleModal } from "../AddTitleModal";
import { StyledNavbar } from "../Navbar";
import { StyledContainer, PageContentContainer } from "./styled";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const PageContainer = ({ children, title }: Props) => {
  const openModal = useRecoilValue(modalManager);
  return (
    <StyledContainer>
      <StyledNavbar />
      {children}
    </StyledContainer>
  );
};
