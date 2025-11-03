import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ToastProvider, useToast } from "./Toast";

// -----------------------------
// Demo Component for Storybook
// -----------------------------
const ToastDemo = () => {
    const { addToast } = useToast();

    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", padding: "1rem" }}>
            <button
                onClick={() => addToast("Success! Plant added 🌿", "success")}
                style={{ padding: "8px 12px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px" }}
            >
                Success
            </button>
            <button
                onClick={() => addToast("Something went wrong!", "error")}
                style={{ padding: "8px 12px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px" }}
            >
                Error
            </button>
            <button
                onClick={() => addToast("Fetching new plants...", "loading", 5000)}
                style={{ padding: "8px 12px", backgroundColor: "#ffc107", color: "black", border: "none", borderRadius: "4px" }}
            >
                Loading
            </button>
            <button
                onClick={() => addToast("Daily watering reminder set!", "info")}
                style={{ padding: "8px 12px", backgroundColor: "#17a2b8", color: "white", border: "none", borderRadius: "4px" }}
            >
                Info
            </button>
        </div>
    );
};

// -----------------------------
// Story Meta Configuration
// -----------------------------
const meta: Meta<typeof ToastProvider> = {
    title: "Organisms/Toast",
    component: ToastProvider,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        position: {
            control: "select",
            options: [
                "top-left",
                "top-center",
                "top-right",
                "bottom-left",
                "bottom-center",
                "bottom-right",
            ],
            description: "Default position for all toasts",
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

// -----------------------------
// Default Story
// -----------------------------
export const Default: Story = {
    args: {
        position: "top-right",
        children: <ToastDemo />,
    },
    render: (args) => (
        <ToastProvider position={args.position}>
            {args.children}
        </ToastProvider>
    ),
};

// -----------------------------
// Bottom Center Story
// -----------------------------
export const BottomCenter: Story = {
    args: {
        position: "bottom-center",
        children: <ToastDemo />,
    },
    render: (args) => (
        <ToastProvider position={args.position}>
            {args.children}
        </ToastProvider>
    ),
};
