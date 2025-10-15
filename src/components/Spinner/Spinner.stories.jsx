import React from "react";
import { Spinner } from "./Spinner";

export default {
    title: "Components/Spinner",
    component: Spinner,
};

export const Default = () => <Spinner />;

export const Small = () => <Spinner size="1rem" />;

export const Large = () => <Spinner size="4rem" />;

export const Centered = () => <Spinner centered />;
