import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { StyledModal } from "../AddTitleModal/styled";
import { DialogActionsContainer } from "./styled";

type DialogProps = {
  message: string;
  type?: string;
  show: boolean;
  action: () => void;
  dismiss: () => void;
};

export const Dialog = ({
  message,
  type = "Alert",
  action,
  dismiss,
  show,
}: DialogProps) => {
  return (
    <div>
      <StyledModal show={show} backdrop="static" centered>
        <Modal.Header>
          {" "}
          <h3> Dialog teste </h3>{" "}
        </Modal.Header>
        <Modal.Body> {message} </Modal.Body>
        <Modal.Footer> {DialogActionManager(type, dismiss)} </Modal.Footer>
      </StyledModal>
    </div>
  );
};

const DialogActionManager = (type: string, dismiss: () => void) => {
  if (type === "Action") {
    return (
      <DialogActionsContainer>
        <Button variant="primary">
          <FaCheck /> Ok, Entendi
        </Button>
        <Button variant="danger" onClick={() => dismiss()}>
          <FaTimes /> Cancelar
        </Button>
      </DialogActionsContainer>
    );
  }
  return (
    <div>
      <Button variant="primary">Ok, entendi </Button>
    </div>
  );
};
