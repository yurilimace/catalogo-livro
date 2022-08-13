import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  & .modal-content {
    border: none;
  }

  & .modal-content > div {
    border: none;
  }
`;

export const AddModalFormContainer = styled.div`
  display: flex;
  padding: 10px;
  & > div {
    width: 50%;
  }
`;

export const AddModalFormInputsSection = styled.div`
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
