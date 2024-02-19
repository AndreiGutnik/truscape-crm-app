import React, { ReactNode } from "react";
import Image from "next/image";

export interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center gap-9 py-6 px-10 border-b border-gray-300">
      <h1 className="flex-1 text-3xl text-gray-900 font-semibold leading-9">
        {children}
      </h1>
      <div className="w-px self-stretch bg-gray-300" />
      <div className="flex justify-center items-center gap-3">
        <Image width={44} height={44} src="/images/avatar.png" alt="Avatar" />
        <div>
          <p className="text-gray-900 text-[15px] font-semibold leading-normal">
            Admin Smith
          </p>
          <p className="text-gray-900 text-sm font-light leading-tight">
            admin@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
}
