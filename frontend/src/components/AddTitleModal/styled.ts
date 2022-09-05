import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  & .modal-content {
    border: none;
  }

  & .modal-content > div {
    border: none;
  }

  & > .modal-body {
    padding: 0.5rem;
  }
`;

export const AddModalFormContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const AddModalFormInputFileSection = styled.div`
  width: 40%;
  padding: 10px;
  margin-right: 50px;
`;

export const AddModalFormInputsSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const AddModalFormButtonsSection = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  & > button {
    margin-right: 8px;
  }
`;
