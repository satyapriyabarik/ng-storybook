import React, { ReactNode, HTMLAttributes } from "react";
interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode[];
    interval?: number;
    fade?: boolean;
}
interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
interface CarouselCaptionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare const Carousel: React.FC<CarouselProps> & {
    Item: React.FC<CarouselItemProps>;
    Caption: React.FC<CarouselCaptionProps>;
};
export default Carousel;
