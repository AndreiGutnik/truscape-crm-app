import React, { ReactNode } from "react";

export interface CompanyTableProps {
  children?: ReactNode;
}

const headers = [
  "Category",
  "Company",
  "Status",
  "Promotion",
  "Country",
  "Joined date",
];

export default function CompanyTable({ children }: CompanyTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
