import React from "react";
import clsx from "clsx";

export interface ButtonProps {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        {...rest}
        className={clsx(
          "py-2.5 px-5 bg-grey-900 text-neutral-50 text-base text-center font-medium rounded",
          !disabled && "hover:bg-grey-800 active: bg-grey-950",
          disabled && "text-neutral-100",
        )}
      />
    </div>
  );
}
