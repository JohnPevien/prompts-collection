import PromptCardList from "../blocks/PromptCardList";
import Header from "@src/components/blocks/Header";
import { PromptCategory } from "@src/types";

export default function AllPage() {
    return (
        <div>
            <Header title="All Prompts" description="All collected prompts" />
            <PromptCardList
                category={"All" as PromptCategory}
                showSearch={true}
                searchPlaceholder="Search..."
            />
        </div>
    );
}
