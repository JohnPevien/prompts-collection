import { cn } from "@src/lib/utils";
import { PROMPT_CATEGORIES } from "@src/constants";

type Props = {
    className?: string;
};

export default function PromptCategories({ className }: Props) {
    return (
        <div className={cn("flex max-w-fit gap-4 mb-5", className)}>
            {PROMPT_CATEGORIES.map((category) => (
                <a
                    key={category}
                    href={`/${category.toLowerCase()}`}
                    className="bg-gray-200 rounded-lg p-2 text-sm cursor-pointer hover:bg-gray-300"
                >
                    {category}
                </a>
            ))}
        </div>
    );
}
