export type PromptCategory = "All" | "Coding" | "Design" | "Testing" | "Other";

export interface Prompt {
    prompt: string;
    footNote?: string | null;
    category?: string | null;
    tags?: string[] | null;
}
