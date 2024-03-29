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
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="pb-5 text-gray-900 text-sm font-light leading-tight"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
