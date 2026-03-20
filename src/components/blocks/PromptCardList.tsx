import { useSearch } from "@src/contexts/SearchContext";
import { PromptCategory } from "@src/types";
import { SearchBar, PromptCard } from "@src/components/blocks";
import { getPromptsByCategory } from "@src/lib/prompts";

type PromptCardListProps = {
    category: PromptCategory;
    showSearch?: boolean;
    searchPlaceholder?: string;
    className?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PromptCardList({
    category,
    showSearch,
    searchPlaceholder,
    className,
}: PromptCardListProps) {
    const { searchQuery } = useSearch();

    let filteredPrompts = getPromptsByCategory(category);

    if (searchQuery) {
        filteredPrompts = filteredPrompts.filter(
            (prompt) =>
                prompt.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }

    return (
        <div className={className}>
            {showSearch && (
                <SearchBar
                    placeholder={searchPlaceholder || "Search prompts..."}
                />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPrompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                ))}
            </div>
        </div>
    );
}
