import { Prompt, PromptCategory } from "@src/types";

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

const marketingPrompts: Prompt[] = [
    ...blogWritingPrompts,
    ...coldDmIdeasPrompts,
    ...coldEmailIdeasPrompts,
    ...contentCreationFrameworksPrompts,
    ...copywritingFrameworksPrompts,
    ...copywritingPrompts,
    ...emailMarketingPrompts,
    ...facebookAdCopyPrompts,
    ...growthHackingFrameworksPrompts,
    ...influencerMarketingPrompts,
    ...instagramStoryIdeasPrompts,
    ...psychologicalModelsPrompts,
    ...twitterThreadIdeasPrompts,
    ...youtubeAdScriptsPrompts,
    ...youtubeVideoIdeasPrompts,
];

const prompts: Prompt[] = [...marketingPrompts, ...codingPrompts];

export function getPromptsByCategory(category: PromptCategory): Prompt[] {
    return category === "All"
        ? prompts
        : prompts.filter(
              (prompt) =>
                  prompt.category.toLowerCase() === category.toLowerCase(),
          );
}
