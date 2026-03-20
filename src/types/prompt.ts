export type PromptCategory =
    | "All"
    | "Blog Writing"
    | "Coding"
    | "Cold DM Ideas"
    | "Cold Email Ideas"
    | "Content Creation Frameworks"
    | "Copywriting Frameworks"
    | "Copywriting"
    | "Email Marketing"
    | "Facebook Ad Copy"
    | "Growth Hacking Frameworks"
    | "Influencer Marketing"
    | "Instagram"
    | "Psychological models"
    | "Twitter"
    | "Youtube";

export interface Prompt {
    id: string;
    title: string;
    prompt: string;
    category: string;
    tags: string[];
}
