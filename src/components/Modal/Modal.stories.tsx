// Modal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Modal from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

// --------------------------------------------------
// Default example (simple modal with toggle Button)
// --------------------------------------------------
export const Default: Story = {
    render: () => {
        const [show, setShow] = useState(false);

        return (
            <>
                <Button
                    variant="primary"
                    onClick={() => setShow(true)}
                >
                    Open Modal
                </Button>

                <Modal
                    show={show}
                    title="Simple Modal"
                    onClose={() => setShow(false)}
                    footer={
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                            <Button onClick={() => setShow(false)} variant="secondary">Close</Button>
                            <Button
                                onClick={() => {
                                    alert("Saved!");
                                    setShow(false);
                                }}
                                variant="success"
                            >
                                Save changes
                            </Button>
                        </div>
                    }
                >
                    <p>This is a simple modal with header, body and footer.</p>
                </Modal>
            </>
        );
    },
};

// --------------------------------------------------
// No Footer / Custom Content
// --------------------------------------------------
export const NoFooter: Story = {
    render: () => {
        const [show, setShow] = useState(false);

        return (
            <>
                <Button onClick={() => setShow(true)} variant="primary">Show Info</Button>
                <Modal
                    show={show}
                    onClose={() => setShow(false)}
                    title="Information"
                >
                    <p>This modal has no footer. Click outside or press ESC to close it.</p>
                </Modal>
            </>
        );
    },
};

// --------------------------------------------------
// Long Content (Scroll within body)
// --------------------------------------------------
export const ScrollableBody: Story = {
    render: () => {
        const [show, setShow] = useState(false);

        return (
            <>
                <Button onClick={() => setShow(true)} variant="primary">Show Long Modal</Button>
                <Modal
                    show={show}
                    title="Scrollable Modal"
                    onClose={() => setShow(false)}
                    footer={<Button onClick={() => setShow(false)} variant="secondary">Close</Button>}
                >
                    <div style={{ maxHeight: "250px", overflowY: "auto" }}>
                        {[...Array(20)].map((_, i) => (
                            <p key={i}>This is line {i + 1} inside a scrollable body.</p>
                        ))}
                    </div>
                </Modal>
            </>
        );
    },
};
