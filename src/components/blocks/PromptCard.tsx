import { Copy, Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Prompt } from "../../types";

type PromptCardProps = {
  title: string;
  prompt: Prompt;
  copiedId: string | null;
  onCopy: (title: string, promptText: string) => void;
};

export default function PromptCard({
  title,
  prompt,
  copiedId,
  onCopy,
}: PromptCardProps) {
  return (
    <Card
      className="h-full flex flex-col cursor-pointer group hover:shadow-lg transition-shadow"
      onClick={() => onCopy(title, prompt.prompt)}
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
        <CardDescription className="text-sm">{prompt.prompt}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        {prompt.codeSelection && (
          <Button variant="outline" size="sm">
            Code Selection
          </Button>
        )}
        {prompt.codebase && (
          <Button variant="outline" size="sm">
            Codebase
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
