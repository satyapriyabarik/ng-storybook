import React, { useState } from "react";
import { Form, FormGroup, Input, TextArea, Button } from "./Form";

export default {
    title: "Components/Form",
    component: Form,
};

export const Default = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${name}, ${message}`);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup label="Name" htmlFor="name">
                <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>

            <FormGroup label="Message" htmlFor="message">
                <TextArea
                    id="message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </FormGroup>

            <Button type="submit">Submit</Button>
        </Form>
    );
};
