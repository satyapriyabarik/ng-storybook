import React from "react";
import { Container } from "./Container";

export default {
    title: "Layout/Container",
    component: Container,
};

export const Default = () => (
    <Container>
        <p>This is a medium container (default).</p>
    </Container>
);

export const AllSizes = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Container size="sm">
            <p>Small container (sm)</p>
        </Container>
        <Container size="md">
            <p>Medium container (md)</p>
        </Container>
        <Container size="lg">
            <p>Large container (lg)</p>
        </Container>
        <Container size="xl">
            <p>Extra Large container (xl)</p>
        </Container>
        <Container fluid>
            <p>Fluid container (full width)</p>
        </Container>
    </div>
);
