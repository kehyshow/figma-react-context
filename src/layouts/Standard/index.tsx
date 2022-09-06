import React, { FC, ReactNode } from "react";
import { LayoutContainer } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const StandardLayout: FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default StandardLayout;
