import styled from "styled-components";

export const Navbar = styled.nav<{ active?: string }>`
  background-color: #6d81fe;
  display: flex;
  color: #fff;
  align-items: center;

  /* & > :not(:first-child, :last-child) {
  } */

  & > :nth-child(${(props) => props.active}) {
    background-color: #1f3df6;
    opacity: 0.8;
  }

  & > :last-child {
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

export const NavItem = styled.div`
  padding: 10px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover:not(:first-child) {
    background-color: #4161fd;
    opacity: 0.8;
  }
`;
