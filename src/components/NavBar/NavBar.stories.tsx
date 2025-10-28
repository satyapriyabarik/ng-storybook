import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Components/NavBar",
    component: NavBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        bg: {
            control: "select",
            options: [
                "light",
                "dark",
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "transparent",
            ],
        },
        variant: {
            control: "select",
            options: ["light", "dark"],
        },
        expand: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "xxl"],
        },
    },
};
export default meta;
type Story = StoryObj<typeof NavBar>;

// ---------------------- Default NavBar ----------------------
export const Default: Story = {
    args: {
        bg: "light",
        variant: "light",
        expand: "lg",
        className: "",
        children: (
            <>
                <NavBar.Brand>GreenKart</NavBar.Brand>
                <NavBar.Toggle ariaControls="navbar-nav" />
                <NavBar.Collapse id="navbar-nav">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/" active>
                            Home
                        </NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/products">
                            Products
                        </NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/contact">
                            Contact
                        </NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </>
        ),
    },
};

// ---------------------- Dark Theme ----------------------
export const Dark: Story = {
    args: {
        ...Default.args,
        bg: "dark",
        variant: "dark",
        children: (
            <>
                <NavBar.Brand>GreenKart</NavBar.Brand>
                <NavBar.Toggle ariaControls="navbar-nav" />
                <NavBar.Collapse id="navbar-nav">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/" active>
                            Dashboard
                        </NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/orders">
                            Orders
                        </NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/settings">
                            Settings
                        </NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </>
        ),
    },
};

// ---------------------- Responsive Example ----------------------
export const Responsive: Story = {
    args: {
        ...Default.args,
        expand: "md",
        children: (
            <>
                <NavBar.Brand>GreenKart</NavBar.Brand>
                <NavBar.Toggle ariaControls="navbar-nav" />
                <NavBar.Collapse id="navbar-nav">
                    <NavBar.Nav>
                        <NavBar.Nav.Link href="/">Home</NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/shop">Shop</NavBar.Nav.Link>
                        <NavBar.Nav.Link href="/about">About</NavBar.Nav.Link>
                    </NavBar.Nav>
                </NavBar.Collapse>
            </>
        ),
    },
};
