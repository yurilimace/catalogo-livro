import styled from "styled-components";
import { Grid } from "../Grid/styled";

export const CollectionGrid = styled(Grid)`
  padding: 10px;
  @media (min-width: 320px) and (max-width: 374px) {
    grid-template-columns: repeat(1, 180px);
    justify-content: center;
  }

  @media (min-width: 375px) and (max-width: 424px) {
    grid-template-columns: repeat(auto-fit, 134px);
    justify-content: start;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, 144px);
    justify-content: start;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, 144px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, 162px);
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1201px) {
    grid-template-columns: repeat(auto-fit, 162px);
    justify-content: start;
    align-items: start;
  }
`;
