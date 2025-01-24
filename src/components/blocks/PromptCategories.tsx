import { cn } from "@src/lib/utils";
import { PROMPT_CATEGORIES } from "@src/constants";
import { Link } from "react-router-dom";

type Props = {
    className?: string;
};

export default function PromptCategories({ className }: Props) {
    return (
        <div className={cn("flex max-w-fit gap-4 mb-5", className)}>
            {PROMPT_CATEGORIES.map((category) => (
                <Link
                    key={category}
                    to={category === "All" ? "/" : `/${category.toLowerCase()}`}
                    className="bg-gray-200 rounded-lg p-2 text-sm cursor-pointer hover:bg-gray-300"
                >
                    {category}
                </Link>
            ))}
        </div>
    );
}
