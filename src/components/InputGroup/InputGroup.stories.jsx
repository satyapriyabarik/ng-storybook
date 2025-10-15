import React, { useState } from "react";
import { InputGroup, InputGroupPrepend, InputGroupAppend, Input } from "./InputGroup";

export default {
    title: "Components/InputGroup",
    component: InputGroup,
};

export const Default = () => {
    const [value, setValue] = useState("");

    return (
        <InputGroup>
            <InputGroupPrepend>@</InputGroupPrepend>
            <Input
                placeholder="Username"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <InputGroupAppend>.com</InputGroupAppend>
        </InputGroup>
    );
};
