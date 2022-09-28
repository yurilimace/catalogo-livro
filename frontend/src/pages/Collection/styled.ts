import styled from "styled-components";

export const Collectionexhibitor = styled.div`
  margin-top: 2rem;
  width: 95%;
  height: 94%;
  overflow-y: auto;

  align-self: start;

  ::-webkit-scrollbar {
    width: 8px;
    height: 15px;
    right: 10px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #6d81fe;
    border-radius: 25px;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    width: 100%;
    justify-content: start;
  }

  @media (min-width: 375px) and (max-width: 424px) {
    width: 100%;
    justify-content: start;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;
