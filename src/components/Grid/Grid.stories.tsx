// Grid.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Container, Row, Col } from "./Grid";

const meta: Meta<typeof Container> = {
    title: "Layout/Grid",
    component: Container,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

// Utility for demo boxes
const Box = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            backgroundColor: "#4caf50",
            color: "white",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "6px",
        }}
    >
        {children}
    </div>
);

// -------------------- Stories --------------------

export const BasicGrid: Story = {
    render: () => (
        <Container>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <Box>Column 1</Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Box>Column 2</Box>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Box>Column 3</Box>
                </Col>
            </Row>
        </Container>
    ),
};

export const WithGap: Story = {
    render: () => (
        <Container>
            <Row gap={2}>
                <Col xs={6}>
                    <Box>Col A</Box>
                </Col>
                <Col xs={6}>
                    <Box>Col B</Box>
                </Col>
            </Row>
        </Container>
    ),
};

export const FluidContainer: Story = {
    render: () => (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Box>1</Box>
                </Col>
                <Col xs={3}>
                    <Box>2</Box>
                </Col>
                <Col xs={3}>
                    <Box>3</Box>
                </Col>
                <Col xs={3}>
                    <Box>4</Box>
                </Col>
            </Row>
        </Container>
    ),
};

export const ResponsiveColumns: Story = {
    render: () => (
        <Container>
            <Row>
                <Col xs={12} sm={6} md={3}>
                    <Box>xs=12 sm=6 md=3</Box>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <Box>xs=12 sm=6 md=3</Box>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <Box>xs=12 sm=6 md=3</Box>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <Box>xs=12 sm=6 md=3</Box>
                </Col>
            </Row>
        </Container>
    ),
};

export const NestedGrid: Story = {
    render: () => (
        <Container>
            <Row>
                <Col xs={8}>
                    <Box>
                        <strong>Parent Col (8/12)</strong>
                        <Row gap={1} style={{ marginTop: "1rem" }}>
                            <Col xs={6}>
                                <Box>Nested 6/12</Box>
                            </Col>
                            <Col xs={6}>
                                <Box>Nested 6/12</Box>
                            </Col>
                        </Row>
                    </Box>
                </Col>
                <Col xs={4}>
                    <Box>Parent Col (4/12)</Box>
                </Col>
            </Row>
        </Container>
    ),
};
