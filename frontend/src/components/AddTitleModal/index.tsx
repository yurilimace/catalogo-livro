import React from "react";
import { Modal, Form } from "react-bootstrap";
import {
  AddModalFormContainer,
  StyledModal,
  AddModalFormInputsSection,
  AddModalFormButtonsSection,
  AddModalFormInputFileSection,
} from "./styled";

import { PUBLISHEROPTIONS } from "../../constants";
import { StyledButton } from "../Button/styled";
import { FaPlus, FaSave } from "react-icons/fa";
import { UploadImageContainer } from "../UploadImage/styled";
import { UploadImage } from "../UploadImage";

type AddTitleModalProps = {
  show: boolean;
  title: string;
  onHide: () => void;
};

export const AddTitleModal = ({ show, title, onHide }: AddTitleModalProps) => {
  return (
    <StyledModal show={show} onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title> Adicionar novo titulo ao acervo </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddModalFormContainer>
          <AddModalFormInputFileSection>
            <UploadImage />
          </AddModalFormInputFileSection>
          <AddModalFormInputsSection>
            <Form>
              <Form.Label> Titulo </Form.Label>
              <Form.Control placeholder="Titulo vol xx" />
              <br />
              <Form.Label> Autor </Form.Label>
              <Form.Control placeholder="Autor da obra" />
              <br />

              {/* mudar o campo editora para um select */}
              <Form.Label> Editora </Form.Label>
              <Form.Select placeholder="Editora">
                {" "}
                {PUBLISHEROPTIONS.map((publisher, index) => (
                  <option key={index} value={publisher.value}>
                    {" "}
                    {publisher.name}{" "}
                  </option>
                ))}{" "}
              </Form.Select>

              <br />
            </Form>
          </AddModalFormInputsSection>
        </AddModalFormContainer>
      </Modal.Body>
      <Modal.Footer>
        <AddModalFormButtonsSection>
          <StyledButton width={"20%"}>
            <FaSave /> Salvar
          </StyledButton>
          <StyledButton width={"23%"} variant="danger">
            <FaPlus /> Cancelar
          </StyledButton>
        </AddModalFormButtonsSection>
      </Modal.Footer>
    </StyledModal>
  );
};
