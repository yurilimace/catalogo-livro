import styled, { keyframes } from "styled-components";

const AnimationDropdown = keyframes`
from{
  opacity:0;
  transform: translate3d(0, 0, 0)
}
to{
  opacity:1;
  transform: translate3d(0, '-100%', 0)
}
`;

export const Dropdown = styled.div<{ active: string }>`
  position: absolute;
  min-width: 150px;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  right: 6%;
  top: 44px;
  border: 1px solid black;
  // background-color: #4861fd;
  background-color: whitesmoke;
  animation-name: ${AnimationDropdown};
  animation-duration: 0.5s;

  @media (min-width: 320px) and (max-width: 374px) {
    right: 1%;
  }

  @media (min-width: 375px) and (max-width: 424px) {
    right: 2%;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    right: 1%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    right: 1%;
  }
  @media (min-width: 1024px) {
    right: 4%;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  color: black;
  text-indent: 8px;
  padding: 2.5px;
  &:hover {
    background-color: #1f3df6;
    border-radius: 4px;
  }
`;
