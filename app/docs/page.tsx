import { Sidebar } from "./components/Sidebar";
import { DocContent } from "./components/DocContent";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0a0020] to-[#1a003c] text-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <DocContent />
      </main>
    </div>
  );
}
