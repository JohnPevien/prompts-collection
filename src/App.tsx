import { useState } from "react";
import prompts from "../code-prompts.json";
import Header from "@src/components/blocks/Header";
import SearchBar from "@src/components/blocks/SearchBar";
import PromptCard from "@src/components/blocks/PromptCard";
import PromptCategories from "@src/components/blocks/PromptCategories";
import { Prompt } from "@src/types";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const promptEntries = Object.entries(prompts) as [string, Prompt][];

  const filteredPrompts = promptEntries.filter(
    ([title, prompt]) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = async (title: string, promptText: string) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedId(title);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      <div className="container mx-auto p-8">
        <Header title="Code Prompts Collection" description="A collection of useful prompts for code-related tasks" />
        <PromptCategories  className="mx-auto"/>
        <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search prompts..." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPrompts.map(([title, prompt]) => (
            <PromptCard
              key={title}
              title={title}
              prompt={prompt}
              copiedId={copiedId}
              onCopy={handleCopy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
