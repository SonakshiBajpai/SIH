"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#111827] text-gray-200 rounded-md p-4 my-4 overflow-x-auto">
      <pre className="text-sm" data-language={language || undefined}>
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <Copy size={18} />
      </button>
      {copied && <span className="absolute top-2 right-10 text-green-400 text-sm">Copied!</span>}
    </div>
  );
}
