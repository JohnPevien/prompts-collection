import PromptCardList from "../blocks/PromptCardList";
import Header from "@src/components/blocks/Header";
import { PromptCategory } from "@src/types";

export default function MarketingPage() {
    return (
        <div>
            <Header
                title="Marketing Prompts Collection"
                description="A collection of useful prompts for marketing tasks"
            />
            <PromptCardList
                category={"Marketing" as PromptCategory}
                showSearch={true}
                searchPlaceholder="Search marketing prompts..."
            />
        </div>
    );
}
