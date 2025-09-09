"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
      <pre className="p-4 text-sm text-gray-200 overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 rounded bg-gray-800 p-1.5 text-gray-300 hover:text-white"
      >
        <Copy size={16} />
      </button>
      {copied && (
        <span className="absolute top-2 right-12 text-xs text-green-400">Copied!</span>
      )}
    </div>
  );
}
