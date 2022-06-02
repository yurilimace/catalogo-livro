import styled from "styled-components";
import { Grid } from "../Grid/styled";

export const CollectionGrid = styled(Grid)`
  @media (min-width: 425px) {
    grid-template-columns: repeat(1, 204px);
    justify-content: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 204px);
    justify-content: center;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    align-items: center;
    gap: 2.2rem;
  }
  @media (min-width: 1201px) {
    grid-template-columns: repeat(6, 204px);
    justify-content: center;
    align-items: center;
  }
`;
