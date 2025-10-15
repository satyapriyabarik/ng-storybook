import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "./ListGroup";

export default {
    title: "Components/ListGroup",
    component: ListGroup,
};

export const Default = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const items = ["First Item", "Second Item", "Third Item"];

    return (
        <ListGroup>
            {items.map((item, index) => (
                <ListGroupItem
                    key={index}
                    active={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                >
                    {item}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};
