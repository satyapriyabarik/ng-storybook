// NavBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Components/NavBar",
    component: NavBar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NavBar>;

// ----------------------------------------------------
// Default NavBar Example
// ----------------------------------------------------
export const Default: Story = {
    render: () => (
        <NavBar bg="dark" variant="dark">
            <NavBar.Brand href="/">MyApp</NavBar.Brand>
            <NavBar.Toggle ariaControls="main-navbar" />
            <NavBar.Collapse id="main-navbar">
                <NavBar.Nav>
                    <NavBar.Nav.Link href="/" active>
                        Home
                    </NavBar.Nav.Link>
                    <NavBar.Nav.Link href="/about">About</NavBar.Nav.Link>
                    <NavBar.Nav.Link href="/contact">Contact</NavBar.Nav.Link>
                </NavBar.Nav>
            </NavBar.Collapse>
        </NavBar>
    ),
};

// ----------------------------------------------------
// Light Variant Example
// ----------------------------------------------------
export const LightVariant: Story = {
    render: () => (
        <NavBar bg="light" variant="light">
            <NavBar.Brand href="/">Brand</NavBar.Brand>
            <NavBar.Toggle ariaControls="navbar-light" />
            <NavBar.Collapse id="navbar-light">
                <NavBar.Nav>
                    <NavBar.Nav.Link href="/">Dashboard</NavBar.Nav.Link>
                    <NavBar.Nav.Link href="/reports" active>
                        Reports
                    </NavBar.Nav.Link>
                    <NavBar.Nav.Link href="/settings">Settings</NavBar.Nav.Link>
                </NavBar.Nav>
            </NavBar.Collapse>
        </NavBar>
    ),
};

// ----------------------------------------------------
// Colored Variants (Primary, Success, Warning)
// ----------------------------------------------------
export const ColoredVariants: Story = {
    render: () => (
        <>
            <NavBar bg="primary" variant="dark" className="mb-3">
                <NavBar.Brand href="/">Primary</NavBar.Brand>
                <NavBar.Toggle ariaControls="nav-primary" />
                <NavBar.Collapse id="nav-primary">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/" active>
                            Home
                        </NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/features">Features</NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </NavBar>

            <NavBar bg="success" variant="dark" className="mb-3">
                <NavBar.Brand href="/">Success</NavBar.Brand>
                <NavBar.Toggle ariaControls="nav-success" />
                <NavBar.Collapse id="nav-success">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/">Dashboard</NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/stats" active>
                            Stats
                        </NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </NavBar>

            <NavBar bg="warning" variant="dark">
                <NavBar.Brand href="/">Warning</NavBar.Brand>
                <NavBar.Toggle ariaControls="nav-warning" />
                <NavBar.Collapse id="nav-warning">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/">Overview</NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/alerts" active>
                            Alerts
                        </NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </NavBar>
        </>
    ),
};

// ----------------------------------------------------
// Expand Sizes Demo
// ----------------------------------------------------
export const ExpandSizes: Story = {
    render: () => (
        <>
            <NavBar bg="dark" variant="dark" expand="sm" className="mb-3">
                <NavBar.Brand href="/">Expand SM</NavBar.Brand>
                <NavBar.Toggle ariaControls="nav-sm" />
                <NavBar.Collapse id="nav-sm">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/" active>
                            Home
                        </NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/about">About</NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </NavBar>

            <NavBar bg="dark" variant="dark" expand="lg">
                <NavBar.Brand href="/">Expand LG</NavBar.Brand>
                <NavBar.Toggle ariaControls="nav-lg" />
                <NavBar.Collapse id="nav-lg">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/">Home</NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/services" active>
                            Services
                        </NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </NavBar>
        </>
    ),
};
