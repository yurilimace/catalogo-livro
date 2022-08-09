import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledButton = styled(Button)<{
  background: string;
  width: string;
}>`
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: 8px;
`;
