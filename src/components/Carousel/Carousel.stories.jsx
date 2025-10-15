import React from "react";
import { Carousel } from "./Carousel";

export default {
    title: "Components/Carousel",
    component: Carousel,
};

const slides = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=30",
    "https://images.unsplash.com/photo-1555037015-1498966bcd7c?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=1600"

];

export const Default = () => <Carousel slides={slides} autoPlay interval={3000} />;

export const Manual = () => <Carousel slides={slides} autoPlay={false} />;
