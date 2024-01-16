import React from "react";
import Style from "./not-active-label.module.css";

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

const NotActiveLabel = ({ children }: NotActiveLabelProps) => {
  return <span className={Style.label}>{children}</span>;
};

export default NotActiveLabel;
