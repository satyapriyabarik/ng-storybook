interface Product {
    id: string;
    name: string;
    category: string;
}
interface SearchBoxProps {
    /** Triggered when user explicitly searches (Enter / click button) */
    onSearch: (query: string, category: string) => void;
    /** Called while typing — should return filtered results */
    onFetchResults?: (query: string, category: string) => Promise<Product[]>;
    /** Optional placeholder text */
    placeholder?: string;
    /** Optional categories provided by parent (auto-detects if not provided) */
    categories?: string[];
}
export default function SearchBox({ onSearch, onFetchResults, placeholder, categories: providedCategories, }: SearchBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
