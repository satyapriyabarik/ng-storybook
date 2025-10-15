import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Variants = () => (
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
