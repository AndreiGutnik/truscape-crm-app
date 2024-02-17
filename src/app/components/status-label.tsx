import React, { ReactNode } from "react";
import clsx from "clsx";

export enum Status {
  Active = "active",
  NotActive = "notActive",
  Pending = "pending",
  Suspended = "suspended",
}

export interface StatusLabelProps {
  children: ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center px-3.5 py-1 rounded-full rext-sm font-medium",
        status === Status.Active && " bg-green-100 text-green-700",
        status === Status.NotActive && " bg-red-100 text-red-700",
        status === Status.Pending && " bg-orange-100 text-orange-700",
        status === Status.Suspended && " bg-blue-100 text-blue-700",
        {
          ["opacity-75 cursor-not-allowed"]: disabled,
        },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}
