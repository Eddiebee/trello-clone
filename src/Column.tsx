import { FC, PropsWithChildren } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = PropsWithChildren<{
  text: string; // the text prop will be required by default and we want it to stay so
}>;

export const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
