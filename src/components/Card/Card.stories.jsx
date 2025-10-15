import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardText } from "./Card";

export default {
    title: "Components/Card",
    component: Card,
};

export const BasicCard = () => (
    <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
                This is an example of a card body. It behaves similarly to React-Bootstrap's Card component.
            </CardText>
        </CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
);

export const CardWithoutHeaderFooter = () => (
    <Card>
        <CardBody>
            <CardTitle>Only Body</CardTitle>
            <CardText>
                Card without header and footer.
            </CardText>
        </CardBody>
    </Card>
);
