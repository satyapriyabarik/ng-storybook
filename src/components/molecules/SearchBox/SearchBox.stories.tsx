import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SearchBox from "./SearchBox";

const meta: Meta<typeof SearchBox> = {
    title: "Molecules/SearchBox",
    component: SearchBox,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onSearch: { action: "searchTriggered" },
    },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

// ✅ Mock dataset for Storybook demo
const mockProducts = [
    { id: "1", name: "Rose Plant", category: "Flower" },
    { id: "2", name: "Tulip", category: "Flower" },
    { id: "3", name: "Aloe Vera", category: "Succulent" },
    { id: "4", name: "Basil", category: "Herb" },
    { id: "5", name: "Cactus", category: "Succulent" },
    { id: "6", name: "Mint", category: "Herb" },
];

// ✅ Dynamic filtering logic (simulates API)
const fetchMockResults = async (query: string, category: string) => {
    await new Promise((resolve) => setTimeout(resolve, 400)); // simulate API latency
    const filtered = mockProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
    );
    return category === "All"
        ? filtered
        : filtered.filter((p) => p.category === category);
};

// ✅ Default story: interactive + dynamic filtering
export const Default: Story = {
    args: {
        onSearch: (query, category) => {
            console.log(`Search triggered for "${query}" in category "${category}"`);
        },
        onFetchResults: fetchMockResults,
        placeholder: "Search for a plant...",
        categories: ["Flower", "Succulent", "Herb"],
    },
};
