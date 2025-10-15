import React from "react";
import { Nav, NavItem } from "./Nav";

export default {
    title: "Components/Nav",
    component: Nav,
};

export const HorizontalNav = () => (
    <Nav>
        <NavItem href="/" active>Home</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
    </Nav>
);

export const VerticalNav = () => (
    <Nav vertical>
        <NavItem href="/" active>Home</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
    </Nav>
);
