// InputGroup.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { InputGroup } from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
    title: "Molecules/InputGroup",
    component: InputGroup,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

// Helper input style (for Storybook demo)
const inputStyle: React.CSSProperties = {
    padding: "0.5rem 0.75rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    flex: 1,
    outline: "none",
};

// -------------------- Stories --------------------

// Basic InputGroup
export const Basic: Story = {
    render: () => (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <input type="text" placeholder="username" style={inputStyle} />
        </InputGroup>
    ),
};

// With Append
export const WithAppend: Story = {
    render: () => (
        <InputGroup>
            <input type="text" placeholder="Recipient's username" style={inputStyle} />
            <InputGroup.Append>
                <InputGroup.Text>@example.com</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    ),
};

// With Button
export const WithButton: Story = {
    render: () => (
        <InputGroup>
            <input type="text" placeholder="Search..." style={inputStyle} />
            <InputGroup.Button>
                <button
                    style={{
                        padding: "0.7rem 1rem",
                        border: "none",
                        backgroundColor: "#4caf50",
                        color: "#fff",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Go
                </button>
            </InputGroup.Button>
        </InputGroup>
    ),
};

// Prepend and Append Together
export const PrependAndAppend: Story = {
    render: () => (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <input type="number" placeholder="Amount" style={inputStyle} />
            <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    ),
};

// Different Sizes
export const Sizes: Story = {
    render: () => (
        <>
            <InputGroup size="sm" style={{ marginBottom: "1rem" }}>
                <InputGroup.Prepend>
                    <InputGroup.Text>SM</InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text" placeholder="Small input" style={inputStyle} />
            </InputGroup>

            <InputGroup size="md" style={{ marginBottom: "1rem" }}>
                <InputGroup.Prepend>
                    <InputGroup.Text>MD</InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text" placeholder="Medium input" style={inputStyle} />
            </InputGroup>

            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text>LG</InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text" placeholder="Large input" style={inputStyle} />
            </InputGroup>
        </>
    ),
};

// Combined Example: Search with icon
export const SearchWithIcon: Story = {
    render: () => (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>🔍</InputGroup.Text>
            </InputGroup.Prepend>
            <input type="search" placeholder="Search..." style={inputStyle} />
            <InputGroup.Append>
                <InputGroup.Button>
                    <button
                        style={{
                            padding: "0.5rem 1rem",
                            border: "none",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Search
                    </button>
                </InputGroup.Button>
            </InputGroup.Append>
        </InputGroup>
    ),
};
