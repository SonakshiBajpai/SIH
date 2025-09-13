"use client";
import CodeBlock from "./CodeBlock";

export default function DocContent({ title, content }: { title: string; content: string }) {
  // Split content into text and code blocks
  const parts = content.split(/```(.*?)\n([\s\S]*?)```/g);

  return (
    <div className="flex-1 p-10 text-white bg-gradient-to-b from-[#1a0133] to-[#0a0133] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4 text-lg leading-relaxed">
        {parts.map((part, i) => {
          if (i % 3 === 0) {
            // Normal text
            return <p key={i}>{part}</p>;
          } else if (i % 3 === 1) {
            // Language specifier (bash, js, etc.) → handled in next step
            return null;
          } else if (i % 3 === 2) {
            // Code block
            const language = parts[i - 1] || "text";
            return <CodeBlock key={i} code={part.trim()} language={language} />;
          }
        })}
      </div>
    </div>
  );
}
