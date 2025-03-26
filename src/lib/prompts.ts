import { Prompt, PromptCategory } from "@src/types";

type PromptArray = Array<{ id: string; prompt: string; category: string }>;
type PromptRecord = Record<string, Prompt>;

import codingPrompts from "@src/data/coding-prompts.json";
import blogWritingPrompts from "@src/data/blog-writing-prompts.json";
import coldDmIdeasPrompts from "@src/data/cold-dm-ideas-prompts.json";
import coldEmailIdeasPrompts from "@src/data/cold-email-ideas-prompts.json";
import contentCreationFrameworksPrompts from "@src/data/content-creation-frameworks-prompts.json";
import copywritingFrameworksPrompts from "@src/data/copywriting-frameworks-prompts.json";
import copywritingPrompts from "@src/data/copywriting-prompts.json";
import emailMarketingPrompts from "@src/data/email-marketing-prompts.json";
import facebookAdCopyPrompts from "@src/data/facebook-ad-copy-prompts.json";
import growthHackingFrameworksPrompts from "@src/data/growth-hacking-frameworks-prompts.json";
import influencerMarketingPrompts from "@src/data/influencer-marketing-prompts.json";
import instagramStoryIdeasPrompts from "@src/data/instagram-story-ideas-prompts.json";
import psychologicalModelsPrompts from "@src/data/psychological-models-prompts.json";
import twitterThreadIdeasPrompts from "@src/data/twitter-thread-ideas-prompts.json";
import youtubeAdScriptsPrompts from "@src/data/youtube-ad-scripts-prompts.json";
import youtubeVideoIdeasPrompts from "@src/data/youtube-video-ideas-prompts.json";

function arrayToRecord(
    arr: PromptArray,
    overrideCategory?: string,
): PromptRecord {
    return arr.reduce((acc, item) => {
        acc[item.id] = {
            prompt: item.prompt,
            category: overrideCategory || item.category,
            footNote: null,
            tags: null,
        };
        return acc;
    }, {} as PromptRecord);
}

const marketingPrompts: PromptRecord = {
    ...arrayToRecord(blogWritingPrompts, "Marketing"),
    ...arrayToRecord(coldDmIdeasPrompts, "Marketing"),
    ...arrayToRecord(coldEmailIdeasPrompts, "Marketing"),
    ...arrayToRecord(contentCreationFrameworksPrompts, "Marketing"),
    ...arrayToRecord(copywritingFrameworksPrompts, "Marketing"),
    ...arrayToRecord(copywritingPrompts, "Marketing"),
    ...arrayToRecord(emailMarketingPrompts, "Marketing"),
    ...arrayToRecord(facebookAdCopyPrompts, "Marketing"),
    ...arrayToRecord(growthHackingFrameworksPrompts, "Marketing"),
    ...arrayToRecord(influencerMarketingPrompts, "Marketing"),
    ...arrayToRecord(instagramStoryIdeasPrompts, "Marketing"),
    ...arrayToRecord(psychologicalModelsPrompts, "Marketing"),
    ...arrayToRecord(twitterThreadIdeasPrompts, "Marketing"),
    ...arrayToRecord(youtubeAdScriptsPrompts, "Marketing"),
    ...arrayToRecord(youtubeVideoIdeasPrompts, "Marketing"),
};

const prompts: PromptRecord = {
    ...marketingPrompts,
    ...codingPrompts,
};

console.log(
    "All Categories:",
    new Set(Object.values(prompts).map((p) => p.category)),
);

export function getPromptsByCategory(
    category: PromptCategory,
): [string, Prompt][] {
    if (category === "All") {
        return Object.entries(prompts);
    }

    const filtered = Object.entries(prompts).filter(([, prompt]) => {
        const matches =
            prompt.category?.toLowerCase() === category.toLowerCase();
        return matches;
    });

    console.log(
        `Filtered prompts for category '${category}':`,
        filtered.length,
    );
    return filtered;
}

export function getAllPrompts(): [string, Prompt][] {
    return Object.entries(prompts);
}
