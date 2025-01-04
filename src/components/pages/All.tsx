import PromptCardList from "../blocks/PromptCardList";
import Header from "@src/components/blocks/Header";
import { PromptCategory } from "@src/types";

export default function AllPage() {
    return (
        <div>
            <Header
                title="Coding Prompts"
                description="A collection of useful coding related prompts"
            />
            <PromptCardList
                category={"All" as PromptCategory}
                showSearch={true}
                searchPlaceholder="Search coding prompts..."
            />
        </div>
    );
}
