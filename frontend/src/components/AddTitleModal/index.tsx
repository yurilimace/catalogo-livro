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
import { UseTitleCRUD } from "../../pages/TitleShowcase/hooks/useTitleCRUD";
import { useForm, FormProvider } from "react-hook-form";
import { TitleDTO } from "../../types/Title";
import { BaseServiceURL } from "../../service/config";

type AddTitleModalProps = {
  show: boolean;
  title: string;
  onHide: () => void;
};

export const AddTitleModal = ({ show, title, onHide }: AddTitleModalProps) => {
  // const { list, AddNewTitle } = UseTitleCRUD();
  const { register, handleSubmit, ...methods } = useForm<TitleDTO>();

  const submit = async (data: TitleDTO) => {
    const response = await BaseServiceURL.post("title", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
  };

  return (
    <StyledModal show={show} onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title> Adicionar novo titulo ao acervo </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormProvider
          register={register}
          handleSubmit={handleSubmit}
          {...methods}
        >
          <Form id={"addTitleForm"} onSubmit={handleSubmit(submit)}>
            <AddModalFormContainer>
              <AddModalFormInputFileSection>
                <UploadImage />
              </AddModalFormInputFileSection>
              <AddModalFormInputsSection>
                <Form.Label> Titulo </Form.Label>
                <Form.Control
                  {...register("name")}
                  placeholder="Titulo vol xx"
                />
                <br />
                <Form.Label> Autor </Form.Label>
                <Form.Control
                  {...register("author")}
                  placeholder="Autor da obra"
                />
                <br />

                {/* mudar o campo editora para um select */}
                <Form.Label> Editora </Form.Label>
                <Form.Select {...register("publisher")} placeholder="Editora">
                  {" "}
                  {PUBLISHEROPTIONS.map((publisher, index) => (
                    <option key={index} value={publisher.value}>
                      {" "}
                      {publisher.name}{" "}
                    </option>
                  ))}{" "}
                </Form.Select>

                <br />
              </AddModalFormInputsSection>
            </AddModalFormContainer>
          </Form>
        </FormProvider>
      </Modal.Body>
      <Modal.Footer>
        <AddModalFormButtonsSection>
          <StyledButton form="addTitleForm" type="submit" width={"20%"}>
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
