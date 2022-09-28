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
  border-radius: 12px;

  background-color: ${(props) => props.backgroundColor ?? "#fff"};
  box-shadow: ${(props) =>
    props.hasBoxShadow && "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  > *:not(:last-child) {
    ${(props) => props.hasDivider && `border-bottom: 1px solid #bbb;`}
  }

  transition: height 0.2s ease-in;
  :hover {
    height: 380px;
    > div {
      display: flex;
    }
  }

  @media (min-width: 375px) and (max-width: 424px) {
    height: 220px;
    width: 140px;
    :hover {
      height: 300px;
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    height: 240px;
    width: 160px;
    :hover {
      height: 310px;
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

  @media (min-width: 375px) and (max-width: 424px) {
    span {
      font-size: 14px;
    }
  }
`;

export const CardFooter = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
`;
