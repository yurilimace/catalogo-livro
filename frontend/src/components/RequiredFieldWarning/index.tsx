import React from "react";
import { Error } from "./styled";
export type Props = {
  message?: string;
};

export const RequiredFieldWarning = ({ message }: Props) => {
  return (
    <>
      <Error> {message}</Error>
    </>
  );
};
