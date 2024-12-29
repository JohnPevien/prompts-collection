import { Search } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        placeholder="Search prompts..."
        value={value}
        onChange={onChange}
        className="pl-9 w-full"
      />
    </div>
  );
}
