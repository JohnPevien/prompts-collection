import React, { createContext, useContext, useState } from 'react';
import prompts from '@/code-prompts.json';
import { Prompt } from '@src/types';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPrompts: [string, Prompt][];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const promptEntries = Object.entries(prompts) as [string, Prompt][];

  const filteredPrompts = promptEntries.filter(
    ([title, prompt]) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredPrompts }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
