import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { SearchSortBar } from "./SearchSortBar";

// Wrapper to simulate stateful usage inside Storybook
const SearchSortBarDemo = () => {
    const [search, setSearch] = useState("Rose");
    const [sortBy, setSortBy] = useState("");

    return (
        <div style={{ padding: "1rem", background: "#f8f9fa", borderRadius: "8px" }}>
            <SearchSortBar
                search={search}
                setSearch={setSearch}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <p className="mt-3 text-muted">
                <strong>Current Search:</strong> {search || "(none)"} <br />
                <strong>Sort By:</strong> {sortBy || "(none)"}
            </p>
        </div>
    );
};

const meta: Meta<typeof SearchSortBarDemo> = {
    title: "Components/SearchSortBar",
    component: SearchSortBarDemo,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};

export default meta;
type Story = StoryObj<typeof SearchSortBarDemo>;

export const Default: Story = {};
