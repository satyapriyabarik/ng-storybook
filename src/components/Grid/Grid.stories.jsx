import React from "react";
import { Col, Container, Row } from "./Grid";

export default {
    title: "Components/Grid",
    component: Container,
};

export const BasicGrid = () => (
    <Container>
        <Row>
            <Col size={4} style={{ backgroundColor: "#f8d7da", padding: "1rem" }}>Col 4</Col>
            <Col size={4} style={{ backgroundColor: "#d1ecf1", padding: "1rem" }}>Col 4</Col>
            <Col size={4} style={{ backgroundColor: "#d4edda", padding: "1rem" }}>Col 4</Col>
        </Row>
        <Row>
            <Col size={6} style={{ backgroundColor: "#fff3cd", padding: "1rem" }}>Col 6</Col>
            <Col size={6} style={{ backgroundColor: "#cce5ff", padding: "1rem" }}>Col 6</Col>
        </Row>
    </Container>
);
