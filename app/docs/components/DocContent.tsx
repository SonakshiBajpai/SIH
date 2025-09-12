import { CodeBlock } from "./CodeBlock";

export default function DocContent({ content }: { content: any }) {
  if (!content) {
    return (
      <div className="p-6 text-gray-400">
        Select a topic from the sidebar to view its content.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white">{content.title}</h1>

      {content.content.map((block: any, i: number) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-gray-300">
              {block.text}
            </p>
          );
        }
        if (block.type === "code") {
          return (
            <CodeBlock
              key={i}
              code={block.code}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
