import type { Meta, StoryObj } from "@storybook/react";
import Rating from "./Rating";

const meta: Meta<typeof Rating> = {
    title: "Components/Rating",
    component: Rating,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        rating: {
            control: { type: "number", min: 0, max: 5, step: 0.5 },
            description: "Rating value (0–5, can include halves)",
        },
        max: {
            control: { type: "number", min: 1, max: 10, step: 1 },
            description: "Maximum number of stars to display",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        rating: 3.5,
        max: 5,
    },
};

export const FullRating: Story = {
    args: {
        rating: 5,
        max: 5,
    },
};

export const HalfRating: Story = {
    args: {
        rating: 2.5,
        max: 5,
    },
};

export const VariableMax: Story = {
    args: {
        rating: 7,
        max: 10,
    },
};
