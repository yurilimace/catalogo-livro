import styled from "styled-components";

export const Grid = styled.div<{ columnTemplate?: string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columnTemplate ? `${props.columnTemplate}` : "auto"};

  div {
    padding: 10px;
    cursor: pointer;
  }
`;
