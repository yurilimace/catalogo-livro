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

    /* @media (min-width: 425px) {
      margin-left: 11%;
    }

    @media (min-width: 768px) {
      margin-left: 46%;
    }

    @media (min-width: 1024px) {
      border: 1px solid red;
      margin-left: 56%;
    }
    @media (min-width: 1201px) {
      margin-left: 66%;
    }
  } */
  }

  @media (min-width: 1920px) {
    padding: 0 4%;
    > :last-child {
      border: 1px solid #3d478a;
      width: 8%;
      margin-left: 76%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    padding: 0 4%;
    height: 6%;
    > :last-child {
      border: 1px solid red;
      width: 12%;
      margin-left: 66%;
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    padding: 0 4%;
    height: 6%;
    > :last-child {
      border: 1px solid yellow;
      margin-left: 40%;
      width: 18%;
    }
  }

  @media (max-width: 767px) and (min-width: 375px) {
    height: 6%;
    padding: 0px;

    > :nth-child(3),
    > :nth-child(4) {
      display: none;
    }

    > :last-child {
      border: 1px solid blue;
      width: 30%;
      margin-left: 35%;
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
