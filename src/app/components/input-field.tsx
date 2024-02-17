"use client";

import { Field } from "formik";
import React, { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 text-gray-900 text-base font-normal leading-normal"
        >
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="h-11 p-3 text-sm rounded border border-gray-300 shadow bg-white"
      />
    </div>
  );
}
