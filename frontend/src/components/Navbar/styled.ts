import styled from "styled-components";

export const Navbar = styled.nav<{ active?: string }>`
  border: 1px solid red;
  height: 3rem;
  background-color: red;
  display: flex;

  & > :not(:first-child, :last-child) {
    border: 1px solid red;
    margin-left: 20px;
  }

  & > :nth-child(${(props) => props.active}) {
    background-color: green;
    opacity: 0.8;
  }

  & > :last-child {
    margin-left: 75%;
  }
`;

export const NavItem = styled.div`
  padding: 10px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover:not(:first-child) {
    background-color: blue;
    opacity: 0.8;
  }
`;
