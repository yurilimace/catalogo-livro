import styled from "styled-components";

export const ImageActions = styled.div`
  height: 0px;
  position: absolute;
  display: flex;
  visibility: hidden;
  transition: visibility 0.01s ease-in, height 0.2s ease-out;
  align-items: center;

  & button:not(:last-child) {
    margin-right: 5px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 230px;
  position: relative;

  > img {
    z-index: 0;
  }

  &:hover {
    > ${ImageActions} {
      background-color: black;

      visibility: visible;
      opacity: 0.6;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 10%;
      position: absolute;
      align-items: center;
      z-index: 1;
    }
  }

  @media (min-width: 375px) and (max-width: 424px) {
    height: 220px;
    width: 100%;
    position: relative;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    height: 240px;
    width: 100%;
    position: relative;
  }
`;
