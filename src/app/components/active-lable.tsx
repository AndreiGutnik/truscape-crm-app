import React from "react";
import style from "./active-lable.module.css";

export interface ActiveLabelProps {
  children: React.ReactNode;
}

const ActiveLabel = ({ children }: ActiveLabelProps) => {
  return (
    <span className="inline-flex px-14 py-4 bg-green-100 text-green-700 rounded-full text-3">
      {children}
    </span>
  );
};

export default ActiveLabel;
