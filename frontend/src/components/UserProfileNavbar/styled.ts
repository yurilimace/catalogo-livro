import styled, { css } from "styled-components";

export const UserProfilePhoto = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #fff;
  text-align: center;
  color: #000;
  font-size: "20px";
`;

export const UserNameContainer = styled.div`
  margin-left: 10px;
`;

export const Chevron = styled.div<{ isOpen: boolean }>`
  margin-left: 10px;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.isOpen ? css`rotate(180deg)` : css`rotate(0deg)`};
  transition: all 0.3s ease;
`;
