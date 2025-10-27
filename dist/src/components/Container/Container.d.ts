import React, { ReactNode, HTMLAttributes } from "react";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    fluid?: boolean;
    className?: string;
}
export declare const Container: React.FC<ContainerProps>;
export default Container;
