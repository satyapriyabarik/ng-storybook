import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SearchBox from "./SearchBox";

const meta: Meta<typeof SearchBox> = {
    title: "Components/SearchBox",
    component: SearchBox,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
    args: {
        onSearch: (query, category) => {
            console.log(`Search triggered for "${query}" in category "${category}"`);
        },
    },
};
