import React from "react";
import { Badge } from "./Badge";

export default {
    title: "Components/Badge",
    component: Badge,
};

export const AllVariants = () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
    </div>
);
