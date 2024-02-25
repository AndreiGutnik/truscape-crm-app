import React from "react";
import Image from "next/image";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image width={122} height={24} src="icons/logo.svg" alt="Logo" />
        <ul>
          <li></li>
          <li></li>
        </ul>
        <button>
          <Image
            width={22}
            height={22}
            src="icons/briefcase.svg"
            alt="Companies icon"
          />
          <span className="text-neutral-50 text-base font-medium leading-normal">
            Exit
          </span>
        </button>
      </div>
    </aside>
  );
}
