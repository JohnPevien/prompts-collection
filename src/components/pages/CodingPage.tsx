import PromptCardList from "../blocks/PromptCardList";
import Header from "@src/components/blocks/Header";
import { PromptCategory } from "@src/types";

export default function CodingPage() {
    return (
        <div>
            <Header
                title="Code Prompts Collection"
                description="A collection of useful prompts for code-related tasks"
            />
            <PromptCardList
                category={"Coding" as PromptCategory}
                showSearch={true}
                searchPlaceholder="Search coding prompts..."
            />
        </div>
    );
}
