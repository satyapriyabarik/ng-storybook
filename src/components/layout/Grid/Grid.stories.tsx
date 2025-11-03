import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Grid } from "./Grid"; // Adjust path as needed
import "./Grid.module.css"; // ensure styles are applied

const meta: Meta<typeof Grid> = {
    title: "Layout/Grid",
    component: Grid,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component:
                    "A responsive grid system for building flexible layouts. Supports fluid containers, rows with gaps, and responsive columns (xs–xl).",
            },
        },
    },
    argTypes: {
        fluid: {
            control: "boolean",
            description: "Makes the grid span the full width of the viewport.",
        },
        className: {
            control: "text",
            description: "Optional custom class for the grid container.",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Grid>;

// ---------------------- Default Layout ----------------------
export const Default: Story = {
    args: {
        fluid: false,
    },
    render: (args) => (
        <Grid {...args}>
            <Grid.Row gap={1}>
                <Grid.Col xs={12} sm={6} md={4} lg={3}>
                    <div
                        style={{
                            backgroundColor: "#c3e6cb",
                            padding: "1rem",
                            textAlign: "center",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Column 1
                    </div>
                </Grid.Col>
                <Grid.Col xs={12} sm={6} md={4} lg={3}>
                    <div
                        style={{
                            backgroundColor: "#bee5eb",
                            padding: "1rem",
                            textAlign: "center",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Column 2
                    </div>
                </Grid.Col>
                <Grid.Col xs={12} sm={6} md={4} lg={3}>
                    <div
                        style={{
                            backgroundColor: "#f5c6cb",
                            padding: "1rem",
                            textAlign: "center",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Column 3
                    </div>
                </Grid.Col>
                <Grid.Col xs={12} sm={6} md={4} lg={3}>
                    <div
                        style={{
                            backgroundColor: "#ffeeba",
                            padding: "1rem",
                            textAlign: "center",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Column 4
                    </div>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    ),
};

// ---------------------- Fluid Container ----------------------
export const Fluid: Story = {
    args: {
        fluid: true,
    },
    render: (args) => (
        <Grid {...args}>
            <Grid.Row gap={2}>
                <Grid.Col xs={12} md={8}>
                    <div
                        style={{
                            backgroundColor: "#d4edda",
                            padding: "1.5rem",
                            textAlign: "center",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Main Content
                    </div>
                </Grid.Col>
                <Grid.Col xs={12} md={4}>
                    <div
                        style={{
                            backgroundColor: "#f8d7da",
                            padding: "1.5rem",
                            textAlign: "center",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Sidebar
                    </div>
                </Grid.Col>
            </Grid.Row>
        </Grid>
    ),
};

// ---------------------- Responsive Columns ----------------------
export const Responsive: Story = {
    render: () => (
        <Grid fluid>
            <Grid.Row gap={1.5}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <Grid.Col key={num} xs={12} sm={6} md={4} lg={2}>
                        <div
                            style={{
                                backgroundColor: "#d1ecf1",
                                padding: "1rem",
                                textAlign: "center",
                                borderRadius: "0.5rem",
                            }}
                        >
                            {`Col ${num}`}
                        </div>
                    </Grid.Col>
                ))}
            </Grid.Row>
        </Grid>
    ),
};
