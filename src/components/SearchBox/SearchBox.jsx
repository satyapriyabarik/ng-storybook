import React, { useState, useRef } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ suggestions = [], onSearch }) => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef();

    const filteredSuggestions =
        query.length >= 3
            ? suggestions.filter((s) =>
                s.toLowerCase().includes(query.toLowerCase())
            )
            : [];

    const handleSelect = (item) => {
        setQuery(item);
        setShowSuggestions(false);
        onSearch?.(item);
    };

    const handleClear = () => {
        setQuery('');
        setShowSuggestions(false);
        inputRef.current.focus();
    };

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.searchBox} ${showSuggestions ? styles.active : ''}`}>
                <span className={styles.icon}>🔍</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    placeholder="Search..."
                    className={styles.input}
                    onChange={(e) => {
                        const val = e.target.value;
                        setQuery(val);
                        if (val.length >= 3) setShowSuggestions(true);
                        else setShowSuggestions(false);
                    }}
                />
                {query && (
                    <button className={styles.clearBtn} onClick={handleClear}>
                        ✖
                    </button>
                )}
            </div>

            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className={styles.suggestions}>
                    {filteredSuggestions.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item)}
                            className={styles.suggestionItem}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBox;
