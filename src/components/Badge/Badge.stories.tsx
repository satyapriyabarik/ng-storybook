// Badge.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ---------------------- Default ----------------------
export const Basic: Story = {
    render: () => (
        <>
            <Badge variant="primary">Primary</Badge>{" "}
            <Badge variant="secondary">Secondary</Badge>{" "}
            <Badge variant="success">Success</Badge>{" "}
            <Badge variant="danger">Danger</Badge>{" "}
            <Badge variant="warning">Warning</Badge>{" "}
            <Badge variant="info">Info</Badge>{" "}
            <Badge variant="light">Light</Badge>{" "}
            <Badge variant="dark">Dark</Badge>
        </>
    ),
};

// ---------------------- Pill Shape ----------------------
export const Pills: Story = {
    render: () => (
        <>
            <Badge variant="primary" pill>
                Primary
            </Badge>{" "}
            <Badge variant="success" pill>
                Success
            </Badge>{" "}
            <Badge variant="danger" pill>
                Danger
            </Badge>{" "}
            <Badge variant="warning" pill>
                Warning
            </Badge>
        </>
    ),
};

// ---------------------- Sizes ----------------------
export const Sizes: Story = {
    render: () => (
        <>
            <Badge variant="info" size="sm">
                Small
            </Badge>{" "}
            <Badge variant="primary" size="md">
                Medium
            </Badge>{" "}
            <Badge variant="dark" size="lg">
                Large
            </Badge>
        </>
    ),
};

// ---------------------- Count Badges ----------------------
export const WithCount: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <div>
                <span>Messages </span>
                <Badge count={5} variant="info" />
            </div>
            <div>
                <span>Notifications </span>
                <Badge count={12} variant="danger" pill />
            </div>
            <div>
                <span>Cart </span>
                <Badge count={3} variant="success" />
            </div>
        </div>
    ),
};

// ---------------------- Dot Variant ----------------------
export const Dots: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
                <span>Online</span>{" "}
                <Badge dot variant="success" style={{ marginLeft: "0.5rem" }} />
            </div>
            <div style={{ position: "relative" }}>
                <span>Offline</span>{" "}
                <Badge dot variant="secondary" style={{ marginLeft: "0.5rem" }} />
            </div>
            <div style={{ position: "relative" }}>
                <span>Busy</span>{" "}
                <Badge dot variant="danger" style={{ marginLeft: "0.5rem" }} />
            </div>
        </div>
    ),
};

// ---------------------- Inside Other Elements ----------------------
export const InsideButtons: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <button
                style={{
                    position: "relative",
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "#fff",
                    cursor: "pointer",
                }}
            >
                Inbox <Badge count={2} variant="info" />
            </button>
            <button
                style={{
                    position: "relative",
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "#fff",
                    cursor: "pointer",
                }}
            >
                Cart <Badge count={9} variant="success" pill />
            </button>
        </div>
    ),
};
