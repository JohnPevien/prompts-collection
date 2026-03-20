import { useParams } from "react-router-dom";
import PromptCardList from "@src/components/blocks/PromptCardList";
import { PromptCategory } from "@src/types/prompt";

export function CategoryPage() {
    const { category } = useParams();
    const pathToCategory: Record<string, PromptCategory> = {
        "blog-writing": "Blog Writing",
        coding: "Coding",
        "cold-dm-ideas": "Cold DM Ideas",
        "cold-email-ideas": "Cold Email Ideas",
        "content-creation-frameworks": "Content Creation Frameworks",
        "copywriting-frameworks": "Copywriting Frameworks",
        copywriting: "Copywriting",
        "email-marketing": "Email Marketing",
        "facebook-ad-copy": "Facebook Ad Copy",
        "growth-hacking-frameworks": "Growth Hacking Frameworks",
        "influencer-marketing": "Influencer Marketing",
        instagram: "Instagram",
        "psychological-models": "Psychological models",
        twitter: "Twitter",
        youtube: "Youtube",
    };

    const categoryName = category ? pathToCategory[category] : "All";

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{categoryName}</h1>
            <PromptCardList category={categoryName} />
        </div>
    );
}
