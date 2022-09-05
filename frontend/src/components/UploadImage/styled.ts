import styled from "styled-components";

export const UploadImageContainer = styled.div<{ hasErrors: boolean }>`
  border: ${(props) =>
    props.hasErrors ? "3px red dashed" : "3px #dedede dashed"};
  width: 210px;
  height: 310px;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PreviewImageUpload = styled.img`
  margin-left: 1.5px;
  width: 201px;
  height: 304px;
`;
