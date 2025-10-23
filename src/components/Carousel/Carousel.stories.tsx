import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
    title: "Components/Carousel",
    component: Carousel,
    argTypes: {
        interval: { control: "number" },
        fade: { control: "boolean" },
        className: { control: "text" },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// ---------------------------
// Default Carousel Story
// ---------------------------
export const Default: Story = {
    render: (args) => (
        <Carousel {...args} style={{ width: "500px", margin: "0 auto" }}>
            <Carousel.Item>
                <div
                    style={{
                        backgroundColor: "#f5a623",
                        height: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "24px",
                    }}
                >
                    Slide 1
                </div>
                <Carousel.Caption>Caption for Slide 1</Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div
                    style={{
                        backgroundColor: "#50e3c2",
                        height: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "24px",
                    }}
                >
                    Slide 2
                </div>
                <Carousel.Caption>Caption for Slide 2</Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div
                    style={{
                        backgroundColor: "#9013fe",
                        height: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "24px",
                    }}
                >
                    Slide 3
                </div>
                <Carousel.Caption>Caption for Slide 3</Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    ),
};

// ---------------------------
// Carousel with Fade Transition
// ---------------------------
export const Fade: Story = {
    render: () => (
        <Carousel fade interval={3000} style={{ width: "500px", margin: "0 auto" }}>
            <Carousel.Item>
                <div
                    style={{
                        backgroundColor: "#f8e71c",
                        height: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#333",
                        fontSize: "24px",
                    }}
                >
                    Slide A
                </div>
                <Carousel.Caption>Caption for Slide A</Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div
                    style={{
                        backgroundColor: "#4a90e2",
                        height: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "24px",
                    }}
                >
                    Slide B
                </div>
                <Carousel.Caption>Caption for Slide B</Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    ),
};
