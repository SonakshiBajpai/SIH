"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import sectionsData from "./sections.json";

export function Sidebar({
  onSelect,
}: {
  onSelect: (content: any) => void;
}) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);

  return (
    <aside className="w-64 bg-[#0a0020] text-gray-300 p-4 overflow-y-auto">
      {sectionsData.sections.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            {section.title}
          </h3>

          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() =>
                    item.children.length > 0 &&
                    setOpenItem(openItem === item.name ? null : item.name)
                  }
                  className={`flex w-full items-center justify-between px-2 py-1 text-sm ${
                    openItem === item.name
                      ? "text-white font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.children.length > 0 &&
                    (openItem === item.name ? (
                      <ChevronDown size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    ))}
                </button>

                {openItem === item.name && (
                  <ul className="ml-4 mt-2 space-y-2 border-l border-gray-700 pl-4">
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveChild(child.title);
                            onSelect(child); // send selected child content to page
                          }}
                          className={`block text-sm ${
                            activeChild === child.title
                              ? "text-purple-400 font-medium"
                              : "hover:text-white"
                          }`}
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
