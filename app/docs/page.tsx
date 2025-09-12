"use client";

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import DocContent from "./components/DocContent";

export default function DocsPage() {
  const [selectedContent, setSelectedContent] = useState<any>(null);

  return (
    <div className="flex min-h-screen bg-[#0a0020] text-white">
      <Sidebar onSelect={setSelectedContent} />
      <main className="flex-1 overflow-y-auto">
        <DocContent content={selectedContent} />
      </main>
    </div>
  );
}
