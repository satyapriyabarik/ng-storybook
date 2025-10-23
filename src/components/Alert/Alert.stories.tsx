// Alert.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
    title: "Components/Alert",
    component: Alert,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

// ---------------------- Basic Variants ----------------------
export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Alert variant="primary">This is a primary alert</Alert>
            <Alert variant="secondary">This is a secondary alert</Alert>
            <Alert variant="success">This is a success alert</Alert>
            <Alert variant="danger">This is a danger alert</Alert>
            <Alert variant="warning">This is a warning alert</Alert>
            <Alert variant="info">This is an info alert</Alert>
            <Alert variant="light">This is a light alert</Alert>
            <Alert variant="dark">This is a dark alert</Alert>
        </div>
    ),
};

// ---------------------- With Headings ----------------------
export const WithHeadings: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Alert variant="success" heading="Success!">
                Your profile has been updated successfully.
            </Alert>
            <Alert variant="danger" heading="Error!">
                Something went wrong. Please try again later.
            </Alert>
            <Alert variant="warning" heading="Warning!">
                Please verify your email to continue.
            </Alert>
        </div>
    ),
};

// ---------------------- Dismissible Alerts ----------------------
export const Dismissible: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Alert variant="info" dismissible>
                This alert can be dismissed.
            </Alert>
            <Alert variant="danger" dismissible heading="Critical!">
                Please take immediate action to fix this issue.
            </Alert>
        </div>
    ),
};

// ---------------------- Controlled Dismissal ----------------------
export const ControlledDismissal: Story = {
    render: () => {
        const [visible, setVisible] = useState(true);

        return (
            <>
                {visible ? (
                    <Alert
                        variant="success"
                        dismissible
                        heading="Controlled Alert"
                        onClose={() => setVisible(false)}
                    >
                        You can reopen this alert after dismissing it.
                    </Alert>
                ) : (
                    <button
                        onClick={() => setVisible(true)}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            background: "#4caf50",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Reopen Alert
                    </button>
                )}
            </>
        );
    },
};

// ---------------------- Mixed Showcase ----------------------
export const Showcase: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Alert variant="primary" heading="Welcome!">
                You’ve successfully logged in.
            </Alert>
            <Alert variant="success" dismissible>
                Your settings have been saved.
            </Alert>
            <Alert variant="danger" dismissible heading="Network Error">
                Unable to fetch data from the server.
            </Alert>
            <Alert variant="info">
                Tip: You can use <strong>Ctrl + S</strong> to save your work.
            </Alert>
        </div>
    ),
};
