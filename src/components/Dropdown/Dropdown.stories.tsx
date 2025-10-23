import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        align: { control: "radio", options: ["start", "end"] },
        className: { control: "text" },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// ---------------------------
// Default Dropdown
// ---------------------------
export const Default: Story = {
    render: () => (
        <div style={{ width: "200px" }}>
            <Dropdown align="start">
                <Dropdown.Toggle>Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#profile">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#orders">My Orders</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => alert("Logged out!")}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    ),
};

// ---------------------------
export const AlignEnd: Story = {
    render: () => (
        <div style={{ width: "200px" }}>
            <Dropdown align="end">
                <Dropdown.Toggle>Options</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                    <Dropdown.Item href="#help">Help</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => alert("Action executed!")}>Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    ),
};

