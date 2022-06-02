import React from "react";
import { Card } from "./styled";

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
  hasDivider?: boolean;
};

export const StyledCard = ({
  children,
  backgroundColor,
  hasDivider,
}: Props) => {
  return (
    <Card backgroundColor={backgroundColor} hasDivider={hasDivider}>
      {children}
    </Card>
  );
};
