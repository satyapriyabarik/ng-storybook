import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
    title: "Components/Container",
    component: Container,
    argTypes: {
        fluid: { control: "boolean" },
        className: { control: "text" },
    },
};

export default meta;

type Story = StoryObj<typeof Container>;

// ---------------------------
// Default Container Story
// ---------------------------
export const Default: Story = {
    render: (args) => (
        <Container {...args} style={{ border: "1px dashed #ccc", padding: "20px" }}>
            <p>This is a default container.</p>
        </Container>
    ),
};

// ---------------------------
// Fluid Container Story
// ---------------------------
export const Fluid: Story = {
    render: (args) => (
        <Container {...args} fluid style={{ border: "1px dashed #f00", padding: "20px" }}>
            <p>This is a fluid (full-width) container.</p>
        </Container>
    ),
};

// ---------------------------
// Custom Class Container Story
// ---------------------------
export const CustomClass: Story = {
    render: (args) => (
        <Container
            {...args}
            className="bg-gray-100 text-center"
            style={{ border: "1px dashed #00f", padding: "20px" }}
        >
            <p>This container uses a custom class and styling.</p>
        </Container>
    ),
};
