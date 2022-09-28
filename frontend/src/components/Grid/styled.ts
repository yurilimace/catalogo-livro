import styled from "styled-components";

export const Grid = styled.div<{ columnTemplate?: string }>`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: ${(props) =>
    props.columnTemplate ? `${props.columnTemplate}` : "auto"};
`;
