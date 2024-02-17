"use client";

import React, { InputHTMLAttributes } from "react";
import Image from "next/image";

export interface LogoUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex gap-10 mb-3">
      {label && (
        <p className="text-gray-900 text-base font-normal leading-normal">
          {label}
        </p>
      )}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full cursor-pointer"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && (
          <p className="text-gray-500 text-sm font-normal leading-tight">
            {placeholder}
          </p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}
