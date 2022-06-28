import styled from "styled-components";

export const Navbar = styled.nav<{ active?: string }>`
  background-color: #6d81fe;
  display: flex;
  color: #fff;
  align-items: center;
  height: 6%;

  & > :nth-child(${(props) => props.active}) {
    background-color: #6d81fe;
    opacity: 0.8;
  }

  & > :last-child {
    background-color: #3d478a;
    width: 8%;
    display: flex;
    align-items: center;

    @media (min-width: 425px) {
      margin-left: 15%;
    }

    @media (min-width: 768px) {
      margin-left: 50%;
    }

    @media (min-width: 1024px) {
      margin-left: 60%;
    }
    @media (min-width: 1201px) {
      margin-left: 70%;
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
