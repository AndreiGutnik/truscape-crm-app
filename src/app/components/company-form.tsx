"use client";

import { Formik } from "formik";
import React from "react";
import LogoUploader from "./logo-uploader";
import InputField from "./input-field";
import Button from "./button";

export interface CompanyInputValues {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
}

const InitialValues = {
  name: "",
  status: "",
  country: "",
  category: "",
  date: "",
  description: "",
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyInputValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={InitialValues} onSubmit={onSubmit}>
      <form className="fles fles-col gap-10">
        <p className="text-gray-900 text-xl font-semibold leading-7">
          Add new company
        </p>
        <div className="flex  justify-center gap-7">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="Category"
            />
            <InputField label="Date" placeholder="Date" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </form>
    </Formik>
  );
}
