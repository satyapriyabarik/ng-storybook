import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
    render: () => (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src="https://placeholder.pics/svg/300"
                alt="Sample"
                width={300}
                height={180}
            />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    This is a simple card example similar to React Bootstrap's style.
                </Card.Text>
            </Card.Body>
            <Card.Footer>Footer content</Card.Footer>
        </Card>
    ),
};

export const WithHeader: Story = {
    render: () => (
        <Card style={{ width: "20rem" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title as="h5">Special Card</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer>Last updated 3 mins ago</Card.Footer>
        </Card>
    ),
};

export const ImageVariants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Card style={{ width: "15rem" }}>
                <Card.Img
                    variant="top"
                    src="https://placeholder.pics/svg/300"
                    alt="Top Image"
                    width={300}
                    height={150}
                />
                <Card.Body>
                    <Card.Title>Top Image</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
                <Card.Img
                    variant="bottom"
                    src="https://placeholder.pics/svg/300"
                    alt="Bottom Image"
                    width={300}
                    height={150}
                />
                <Card.Body>
                    <Card.Title>Bottom Image</Card.Title>
                </Card.Body>
            </Card>
        </div>
    ),
};
