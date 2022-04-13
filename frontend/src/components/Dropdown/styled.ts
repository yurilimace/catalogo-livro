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
  flex-direction: column;
  right: 1px;
  top: 49px;
  border: 1px solid red;
  animation-name: ${AnimationDropdown};
  animation-duration: 0.5s;
`;

export const DropdownItem = styled.div`
  &:hover {
    background-color: green;
  }
`;
