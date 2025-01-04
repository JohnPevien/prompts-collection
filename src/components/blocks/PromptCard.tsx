import { Copy, Check } from "lucide-react";
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@src/components/ui/Card";
import { Prompt } from "@src/types";

type PromptCardProps = {
    title: string;
    prompt: Prompt;
};

export default function PromptCard({ title, prompt }: PromptCardProps) {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt.prompt);
            setCopiedId(title);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return (
        <Card
            className="h-full flex flex-col cursor-pointer group hover:shadow-lg transition-shadow"
            onClick={handleCopy}
        >
            <CardHeader className="flex-1">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl mb-2">{title}</CardTitle>
                    {copiedId === title ? (
                        <Check className="h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                </div>
                <CardDescription className="text-sm">
                    {prompt.prompt}
                </CardDescription>
            </CardHeader>
            <CardFooter className="gap-3 flex flex-wrap">
                {prompt?.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                    >
                        {tag}
                    </span>
                ))}
            </CardFooter>
        </Card>
    );
}
