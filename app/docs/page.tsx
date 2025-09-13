"use client";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import DocContent from "./components/DocContent";
import sectionsData from "./components/sections.json";

export default function DocsPage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Quickstart");

  useEffect(() => {
    // Load Quickstart → Set up by default
    if (sectionsData["Getting Started"]["Quickstart"]) {
      const firstItem = sectionsData["Getting Started"]["Quickstart"]["Set up"];
      setContent(firstItem);
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar onSelect={(content, title) => { setContent(content); setTitle(title); }} />
      <DocContent title={title} content={content} />
    </div>
  );
}
