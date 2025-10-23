// ListGroup.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ListGroup } from "./ListGroup";

const meta: Meta<typeof ListGroup> = {
    title: "Components/ListGroup",
    component: ListGroup,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

// ---------------------- BASIC ----------------------
export const Basic: Story = {
    render: () => (
        <ListGroup>
            <ListGroup.Item>First item</ListGroup.Item>
            <ListGroup.Item>Second item</ListGroup.Item>
            <ListGroup.Item>Third item</ListGroup.Item>
        </ListGroup>
    ),
};

// ---------------------- ACTIVE & DISABLED ----------------------
export const ActiveAndDisabled: Story = {
    render: () => (
        <ListGroup>
            <ListGroup.Item active>Active item</ListGroup.Item>
            <ListGroup.Item>Normal item</ListGroup.Item>
            <ListGroup.Item disabled>Disabled item</ListGroup.Item>
        </ListGroup>
    ),
};

// ---------------------- ACTIONABLE ITEMS ----------------------
export const Actionable: Story = {
    render: () => (
        <ListGroup>
            <ListGroup.Item action onClick={() => alert("Clicked first item!")}>
                Clickable Item
            </ListGroup.Item>
            <ListGroup.Item
                as="Link"
                href="https://storybook.js.org/"
                action
            >
                Link Item (opens Storybook)
            </ListGroup.Item>
        </ListGroup>
    ),
};

// ---------------------- FLUSH LIST ----------------------
export const Flush: Story = {
    render: () => (
        <ListGroup flush>
            <ListGroup.Item>Compact layout 1</ListGroup.Item>
            <ListGroup.Item>Compact layout 2</ListGroup.Item>
            <ListGroup.Item>Compact layout 3</ListGroup.Item>
        </ListGroup>
    ),
};

// ---------------------- EMPTY STATE ----------------------
export const EmptyState: Story = {
    render: () => <ListGroup emptyMessage="Nothing to display!" />,
};
