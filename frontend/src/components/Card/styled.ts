import styled from "styled-components";

export const Card = styled.div<{
  backgroundColor?: string;
  hasDivider?: boolean;
  hasBoxShadow?: boolean;
}>`
  flex-direction: column;
  width: fit-content;
  align-items: start;
  height: 304px;

  background-color: ${(props) => props.backgroundColor ?? "#fff"};
  box-shadow: ${(props) =>
    props.hasBoxShadow && "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  > *:not(:last-child) {
    ${(props) => props.hasDivider && `border-bottom: 1px solid #bbb;`}
  }

  transition: height 0.2s ease-in;
  :hover {
    height: 375px;
    > div {
      display: flex;
    }
  }
`;
export const CardTitle = styled.div<{ color?: string }>`
  color: ${(props) => props.color ?? "#000"};
  border-radius: 10px;
`;

export const CardBody = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h4 {
    font-size: 1.3rem;
  }
`;

export const CardFooter = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
`;
