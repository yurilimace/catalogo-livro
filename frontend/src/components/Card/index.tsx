import React from "react";
import { Card } from "./styled";

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
  hasDivider?: boolean;
  hasBoxShadow?: boolean;
};

export const StyledCard = ({
  children,
  backgroundColor,
  hasDivider,
  hasBoxShadow = true,
}: Props) => {
  return (
    <Card
      hasBoxShadow={hasBoxShadow}
      backgroundColor={backgroundColor}
      hasDivider={hasDivider}
    >
      {children}
    </Card>
  );
};
