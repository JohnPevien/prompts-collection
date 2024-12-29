import { Input } from "@src/components/ui/Input";
import { useSearch } from "@src/contexts/SearchContext";

interface Props {
  placeholder: string;
}

export default function SearchBar({ placeholder }: Props) {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
