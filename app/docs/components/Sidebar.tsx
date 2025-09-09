"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    items: ["Introduction", "Quickstart", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "Resources",
    items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "Reach Core Concepts",
    items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
];

export function Sidebar() {
  const [openSection, setOpenSection] = useState<string | null>("Getting Started");

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-800 p-4">
      <input
        type="text"
        placeholder="Search"
        className="mb-4 w-full rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {sections.map((section) => (
        <div key={section.title} className="mb-3">
          <button
            onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
            className="flex w-full items-center justify-between px-2 py-1 text-sm font-semibold text-gray-400 hover:text-white"
          >
            {section.title}
            {openSection === section.title ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {openSection === section.title && (
            <ul className="ml-4 mt-2 space-y-1">
              {section.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block rounded px-2 py-1 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
