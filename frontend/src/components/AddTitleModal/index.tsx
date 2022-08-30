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

import { UploadImage } from "../UploadImage";

import { useForm, FormProvider } from "react-hook-form";
import { TitleDTO } from "../../types/Title";

import { useRecoilValue } from "recoil";
import { TitleAtom } from "../../store/Title/title.atom";

type AddTitleModalProps = {
  show: boolean;
  title: string;
  loading?: boolean;
  Submit: (data: TitleDTO, dialogController: () => void) => void;
  onHide: () => void;
};

export const AddTitleModal = ({
  show,
  title,
  onHide,
  loading,
  Submit,
}: AddTitleModalProps) => {
  const selectedTitle = useRecoilValue(TitleAtom);
  const { name, publisher, author, id, coverUrl } = selectedTitle;
  const { register, handleSubmit, ...methods } = useForm<TitleDTO>();

  React.useEffect(() => {
    if (show) {
      methods.reset({ name: name, publisher: publisher, author: author });
    }
  }, [show]);

  const submit = async (data: TitleDTO) => {
    Submit(data, () => onHide());
  };

  return (
    <StyledModal show={show} onHide={() => onHide()} backdrop="static">
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
          <StyledButton
            disabled={loading}
            form="addTitleForm"
            type="submit"
            width={"30%"}
          >
            {loading ? (
              "...Carregando"
            ) : (
              <>
                <FaSave /> Salvar
              </>
            )}
          </StyledButton>
          <StyledButton disabled={loading} width={"23%"} variant="danger">
            <FaPlus /> Cancelar
          </StyledButton>
        </AddModalFormButtonsSection>
      </Modal.Footer>
    </StyledModal>
  );
};
