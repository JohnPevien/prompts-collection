export type PromptCategory = "All" | "Coding" | "Design" | "Testing" | "Other";

export type Prompt = {
  prompt: string;
  footNote: string;
  codeSelection: boolean;
  codebase: boolean;
  category: PromptCategory;
  tags: string[];
};