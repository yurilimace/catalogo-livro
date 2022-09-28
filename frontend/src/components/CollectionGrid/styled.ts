import styled from "styled-components";
import { Grid } from "../Grid/styled";

export const CollectionGrid = styled(Grid)`
  @media (min-width: 320px) and (max-width: 374px) {
    grid-template-columns: repeat(1, 180px);
    justify-content: center;
  }

  @media (min-width: 375px) and (max-width: 424px) {
    grid-template-columns: repeat(2, 160px);
    justify-content: start;
    padding: 10px;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, 203px);
    justify-content: start;
    padding: 10px;
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
    grid-template-columns: repeat(auto-fit, 204px);
    justify-content: center;
    align-items: center;
  }
`;
