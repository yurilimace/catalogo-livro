import styled from "styled-components";

export const Navbar = styled.nav<{ active?: string }>`
  background-color: #6d81fe;
  display: flex;
  color: #fff;
  align-items: center;
  height: 6%;
  padding: 0 44px;

  & > :nth-child(${(props) => props.active}) {
    background-color: #3d478a;
    opacity: 0.8;
  }

  & > :last-child {
    background-color: #6d81fe;
    width: 10%;
    display: flex;
    align-items: center;

    @media (min-width: 425px) {
      margin-left: 11%;
    }

    @media (min-width: 768px) {
      margin-left: 46%;
    }

    @media (min-width: 1024px) {
      margin-left: 56%;
    }
    @media (min-width: 1201px) {
      margin-left: 66%;
    }
  }
`;

export const NavItem = styled.div<{ isDropdownOpen?: boolean }>`
  padding: 10px;
  flex-shrink: 0;
  cursor: pointer;
  height: 100%;

  &:hover:not(:first-child) {
    background-color: #4161fd;
    opacity: 0.8;
  }
`;
