"use client";
import { useState, useEffect } from "react";
import sectionsData from "./sections.json";

export default function Sidebar({ onSelect }: { onSelect: (content: string, title: string) => void }) {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");

  // Default expand Quickstart
  useEffect(() => {
    if (sectionsData["Getting Started"] && sectionsData["Getting Started"]["Quickstart"]) {
      setOpenSections((prev) => ({ ...prev, Quickstart: true }));
    }
  }, []);

  const handleToggle = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filterContent = (title: string) => title.toLowerCase().includes(searchQuery);

  return (
    <div className="w-64 bg-[#0a0133] text-white h-screen p-4 overflow-y-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none"
        />
      </div>
      {Object.entries(sectionsData).map(([section, content]) => (
        <div key={section} className="mb-4">
          <button
            onClick={() => handleToggle(section)}
            className="font-semibold text-lg w-full text-left"
          >
            {section}
          </button>
          {typeof content === "object" && (
            <div className={`ml-4 mt-2 space-y-2 ${openSections[section] ? "block" : "hidden"}`}>
              {Object.entries(content).map(([sub, subContent]) => {
                if (!filterContent(sub) && !filterContent(section)) return null;
                if (typeof subContent === "string") {
                  return (
                    <button
                      key={sub}
                      onClick={() => onSelect(subContent, sub)}
                      className="block w-full text-left text-gray-300 hover:text-white"
                    >
                      {sub}
                    </button>
                  );
                } else {
                  return (
                    <div key={sub}>
                      <button
                        onClick={() => handleToggle(sub)}
                        className="font-medium text-md text-purple-300"
                      >
                        {sub}
                      </button>
                      <div className={`ml-4 mt-1 space-y-1 ${openSections[sub] ? "block" : "hidden"}`}>
                        {Object.entries(subContent).map(([nested, nestedContent]) => {
                          if (!filterContent(nested)) return null;
                          return (
                            <button
                              key={nested}
                              onClick={() => onSelect(nestedContent as string, nested)}
                              className="block w-full text-left text-gray-400 hover:text-white"
                            >
                              {nested}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
