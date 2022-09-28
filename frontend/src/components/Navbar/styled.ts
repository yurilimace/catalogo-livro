import styled from "styled-components";

export const Navbar = styled.nav<{ active?: string }>`
  background-color: #6d81fe;
  display: flex;
  color: #fff;
  align-items: center;
  height: 6%;
  padding: 0 5.5%;

  & > :nth-child(${(props) => props.active}) {
    display: flex;
    justify-content: center;
    background-color: #3d478a;
    opacity: 0.8;
  }

  & > :last-child {
    background-color: #6d81fe;
    width: fit-content;
    display: flex;
    align-items: center;
    margin-left: 60%;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    height: 6%;
    padding: 0px;

    > :nth-child(3),
    > :nth-child(4) {
      display: none;
    }

    > :last-child {
      justify-content: end;
      margin-left: 22%;
      width: 44%;
      align-items: center;
    }
  }

  @media (min-width: 375px) and (max-width: 424px) {
    height: 6%;
    padding: 0px;

    > :nth-child(3) {
      display: none;
    }

    > :last-child {
      justify-content: end;
      margin-left: 15%;
      width: 36%;
      align-items: center;
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    height: 7%;
    padding: 0px;
    > :nth-child(3) {
      display: none;
    }
    > :last-child {
      justify-content: end;
      margin-left: 40%;
      width: auto;
      align-items: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 7%;

    & > :nth-child(${(props) => props.active}) {
      display: flex;
      justify-content: center;
      width: auto;
      background-color: #3d478a;
      opacity: 0.8;
    }

    > :last-child {
      justify-content: end;
      margin-left: 36%;
      width: auto;
      align-items: center;
    }
  }

  @media (min-width: 1024px) and (max-width: 1339px) {
    padding: 0 6%;
    height: 6%;

    & > :nth-child(${(props) => props.active}) {
      display: flex;
      justify-content: center;
      width: auto;
      background-color: #3d478a;
      opacity: 0.8;
    }

    > :last-child {
      justify-content: center;
      width: 16%;
      margin-left: 58%;
      align-items: center;
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

  @media (min-width: 320px) and (max-width: 374px) {
    padding: 8px;
  }

  @media (min-width: 375px) and (max-width: 425px) {
    padding: 6px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 12px;
  }

  @media (min-width: 1024px) and (max-width: 1339px) {
    padding: 8px;
  }

  @media (min-width: 1440px) {
    padding: 10px;
  }
`;
