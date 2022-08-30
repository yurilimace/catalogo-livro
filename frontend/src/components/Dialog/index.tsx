import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

import { StyledModal } from "../AddTitleModal/styled";
import { DialogActionsContainer } from "./styled";

type DialogProps = {
  message: string;
  type?: string;
  loading?: boolean;
  show: boolean;
  action: () => void;
  dismiss: () => void;
};

export const Dialog = ({
  message,
  type = "Alert",
  action,
  dismiss,
  loading,
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
        <Modal.Footer>
          {DialogActionManager(type, action, dismiss, loading)}
        </Modal.Footer>
      </StyledModal>
    </div>
  );
};

const DialogActionManager = (
  type: string,
  action: () => void,
  dismiss: () => void,
  loading?: boolean
) => {
  if (type === "Action") {
    return (
      <DialogActionsContainer>
        <Button disabled={loading} onClick={() => action()} variant="primary">
          {loading ? (
            "...Carregando"
          ) : (
            <>
              <FaCheck /> Ok, Entendi
            </>
          )}
        </Button>
        <Button disabled={loading} variant="danger" onClick={() => dismiss()}>
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
