import styled from "styled-components";
import { Form } from "react-bootstrap";
import error from "../../assets/Error.svg";
import arrowDown from "../../assets/arrowDown.svg";
// const arrowDown =
//   "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.o…-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e";

export const SelectWithFormValidation = styled(Form.Select)<{
  hasErrors: boolean;
}>`
  border-color: ${(props) => props.hasErrors && "red"};
  background-image: ${(props) =>
    props.hasErrors && `url(${error}),url(${arrowDown})`};
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.hasErrors && "right 2.7rem center, right 0.75rem center"};
  background-size: 25px;
`;
