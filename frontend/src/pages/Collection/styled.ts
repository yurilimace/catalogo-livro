import styled from "styled-components";

export const Collectionexhibitor = styled.div`
  margin-top: 2rem;
  width: 95%;
  overflow-y: auto;

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
`;
