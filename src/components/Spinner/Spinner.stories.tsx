import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
    title: "Components/Spinner",
    component: Spinner,
    tags: ["autodocs"],
    argTypes: {
        animation: {
            control: "select",
            options: ["border", "grow"],
            description: "Type of spinner animation",
        },
        variant: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "light",
                "dark",
            ],
            description: "Visual color variant",
        },
        size: {
            control: "select",
            options: ["sm", "lg"],
            description: "Spinner size (optional)",
        },
        label: {
            control: "text",
            description: "Accessibility label for screen readers",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// ------------------------------------------------------
// Default Story
// ------------------------------------------------------
export const Default: Story = {
    args: {
        animation: "border",
        variant: "primary",
        label: "Loading...",
    },
};

// ------------------------------------------------------
// Grow Animation
// ------------------------------------------------------
export const Grow: Story = {
    args: {
        animation: "grow",
        variant: "success",
        label: "Loading data...",
    },
};

// ------------------------------------------------------
// Different Variants Showcase
// ------------------------------------------------------
export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Spinner variant="primary" />
            <Spinner variant="secondary" />
            <Spinner variant="success" />
            <Spinner variant="danger" />
            <Spinner variant="warning" />
            <Spinner variant="info" />
            <Spinner variant="light" />
            <Spinner variant="dark" />
        </div>
    ),
};

// ------------------------------------------------------
// Different Sizes
// ------------------------------------------------------
export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Spinner size="sm" />
            <Spinner />
            <Spinner size="lg" />
        </div>
    ),
};
