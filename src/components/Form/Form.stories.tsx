// Form.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
    title: "Components/Form",
    component: Form,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

// ---------- Basic Form ----------
export const Basic: Story = {
    render: () => (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Input id="name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input id="email" type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.TextArea id="message" placeholder="Type your message..." rows={4} />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="country">Country</Form.Label>
                <Form.Select id="country">
                    <option value="">Select Country</option>
                    <option value="IN">India</option>
                    <option value="US">USA</option>
                    <option value="UK">UK</option>
                </Form.Select>
            </Form.Group>

            <button type="submit" className="btn btn-success mt-3">
                Submit
            </button>
        </Form>
    ),
};

// ---------- Input Variations ----------
export const Inputs: Story = {
    render: () => (
        <Form>
            <Form.Group>
                <Form.Label htmlFor="text">Text Input</Form.Label>
                <Form.Input id="text" placeholder="Text input" />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Input id="password" type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="number">Number</Form.Label>
                <Form.Input id="number" type="number" min={0} max={100} />
            </Form.Group>
        </Form>
    ),
};

// ---------- TextArea ----------
export const TextAreas: Story = {
    render: () => (
        <Form>
            <Form.Group>
                <Form.Label htmlFor="feedback">Feedback</Form.Label>
                <Form.TextArea id="feedback" placeholder="Share your thoughts..." rows={5} />
            </Form.Group>
        </Form>
    ),
};

// ---------- Select Dropdown ----------
export const Selects: Story = {
    render: () => (
        <Form>
            <Form.Group>
                <Form.Label htmlFor="fruit">Favorite Fruit</Form.Label>
                <Form.Select id="fruit" defaultValue="">
                    <option value="" disabled>
                        Choose a fruit
                    </option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </Form.Select>
            </Form.Group>
        </Form>
    ),
};

// ---------- Unified Control ----------
export const ControlVariants: Story = {
    render: () => (
        <Form>
            <Form.Group>
                <Form.Label htmlFor="ctrl-input">Control as Input</Form.Label>
                <Form.Control id="ctrl-input" as="input" placeholder="Type something..." />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="ctrl-textarea">Control as TextArea</Form.Label>
                <Form.Control id="ctrl-textarea" as="textarea" rows={3} placeholder="Write here..." />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="ctrl-select">Control as Select</Form.Label>
                <Form.Control id="ctrl-select" as="select">
                    <option value="">Select option</option>
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                </Form.Control>
            </Form.Group>
        </Form>
    ),
};
