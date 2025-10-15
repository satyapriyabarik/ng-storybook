import React from "react";
import { Dropdown } from "./Dropdown";

export default {
    title: "Components/Dropdown",
    component: Dropdown,
};

export const Default = () => (
    <Dropdown
        title="Actions"
        items={[
            { label: "Profile", onClick: () => alert("Profile clicked") },
            { label: "Settings", onClick: () => alert("Settings clicked") },
            { divider: true },
            { label: "Logout", onClick: () => alert("Logout clicked") },
        ]}
    />
);

export const Simple = () => (
    <Dropdown
        title="Menu"
        items={[
            { label: "Home" },
            { label: "About" },
            { label: "Contact" },
        ]}
    />
);
