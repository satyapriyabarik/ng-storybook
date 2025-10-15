import React from "react";
import { Navbar, NavItem } from "./Navbar";

export default {
    title: "Components/Navbar",
    component: Navbar,
};

export const DefaultNavbar = () => (
    <Navbar brand="🌱 MyShop">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
    </Navbar>
);
