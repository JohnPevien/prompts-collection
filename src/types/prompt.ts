export type PromptCategory = "Coding" | "Design" | "Testing" | "Other";

export type Prompt = {
  prompt: string;
  footNote: string;
  codeSelection: boolean;
  codebase: boolean;
  category: PromptCategory;
  tags: string[];
};