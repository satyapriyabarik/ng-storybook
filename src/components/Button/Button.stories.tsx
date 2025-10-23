import React from "react";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: { control: { type: "radio" }, options: ["primary", "secondary", "danger", "success"] },
        size: { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        disabled: { control: "boolean" },
        children: { control: "text" },
    },
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Primary = (args: any) => <Button {...args} />;
Primary.args = { children: "Primary Button", variant: "primary", size: "md", disabled: false };

export const Secondary = (args: any) => <Button {...args} />;
Secondary.args = { children: "Secondary Button", variant: "secondary", size: "md", disabled: false };

export const Success = (args: any) => <Button {...args} />;
Success.args = { children: "Success Button", variant: "success", size: "md", disabled: false };

export const Danger = (args: any) => <Button {...args} />;
Danger.args = { children: "Danger Button", variant: "danger", size: "md", disabled: false };

export const Sizes = () => (
    <div style={{ display: "flex", gap: "12px" }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
    </div>
);
