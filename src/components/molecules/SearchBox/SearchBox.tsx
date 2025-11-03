import React, { useState, useEffect, useRef } from "react";
import { Form } from "../../atoms/Form";
import { InputGroup } from "../InputGroup";
import { Button } from "../../atoms/Button";
import { ListGroup } from "../ListGroup";
import { Spinner } from "../../atoms/Spinner";
import { FaSearch } from "react-icons/fa";

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

export default function SearchBox({
    onSearch,
    onFetchResults,
    placeholder = "Search...",
    categories: providedCategories,
}: SearchBoxProps) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [results, setResults] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>(["All"]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // ✅ Update categories dynamically (from parent or from fetched results)
    useEffect(() => {
        if (providedCategories && providedCategories.length > 0) {
            setCategories(["All", ...providedCategories.filter((c) => c !== "All")]);
        }
    }, [providedCategories]);

    // ✅ Fetch search results from parent logic
    useEffect(() => {
        if (!onFetchResults || !query.trim()) {
            setResults([]);
            setShowDropdown(false);
            return;
        }

        setLoading(true);
        const fetchResults = async () => {
            try {
                const fetched = await onFetchResults(query, category);
                setResults(fetched.slice(0, 5)); // show top 5

                // Auto-discover categories if not passed by parent
                if (!providedCategories || providedCategories.length === 0) {
                    const unique = Array.from(new Set(fetched.map((p) => p.category)));
                    setCategories(["All", ...unique]);
                }

                setShowDropdown(true);
            } catch (err) {
                console.error("Error fetching results:", err);
            } finally {
                setLoading(false);
            }
        };

        const timer = setTimeout(fetchResults, 300); // debounce
        return () => clearTimeout(timer);
    }, [query, category, onFetchResults]);

    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query, category);
        setShowDropdown(false);
    };

    return (
        <div className="position-relative" ref={dropdownRef} style={{ minWidth: "400px" }}>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Form.Select
                        style={{ maxWidth: "120px" }}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </Form.Select>

                    <Form.Control
                        type="text"
                        placeholder={placeholder}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => query && results.length > 0 && setShowDropdown(true)}
                    />

                    <Button type="submit" variant="success" aria-label="Search">
                        <FaSearch />
                    </Button>
                </InputGroup>
            </Form>

            {/* Dropdown results */}
            {showDropdown && (
                <ListGroup
                    className="position-absolute w-100 shadow-sm bg-white"
                    style={{ zIndex: 1000 }}
                >
                    {loading && (
                        <ListGroup.Item className="text-center">
                            <Spinner animation="border" size="sm" /> Loading...
                        </ListGroup.Item>
                    )}

                    {!loading && results.length === 0 && (
                        <ListGroup.Item className="text-center text-muted">
                            No results
                        </ListGroup.Item>
                    )}

                    {!loading &&
                        results.map((p) => (
                            <ListGroup.Item
                                key={p.id}
                                action
                                as="Link"
                                href={`/productDetails/${p.id}`}
                                style={{ color: "green" }}
                            >
                                {p.name} <span className="text-muted small">({p.category})</span>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            )}
        </div>
    );
}
