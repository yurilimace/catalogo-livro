import styled from "styled-components";

export const Card = styled.div<{
  backgroundColor?: string;
  hasDivider?: boolean;
}>`
  flex-direction: column;
  width: fit-content;
  align-items: start;
  border-radius: 25px;
  background-color: ${(props) => props.backgroundColor ?? "#fff"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  > *:not(:last-child) {
    ${(props) => props.hasDivider && `border-bottom: 1px solid #bbb;`}
  }
`;
export const CardTitle = styled.div<{ color?: string }>`
  color: ${(props) => props.color ?? "#000"};
  border-radius: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
