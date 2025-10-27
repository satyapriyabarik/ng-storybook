import React, { ReactNode, HTMLAttributes, ElementType } from "react";
import Image from "next/image";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
interface TitleProps extends CardProps {
    as?: ElementType;
}
interface CardImgProps extends Omit<React.ComponentProps<typeof Image>, "alt"> {
    variant?: "top" | "bottom" | "rounded" | "circle";
    alt: string;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.FC<CardProps>;
    Body: React.FC<CardProps>;
    Footer: React.FC<CardProps>;
    Title: React.FC<TitleProps>;
    Text: React.FC<CardProps>;
    Img: React.FC<CardImgProps>;
};
export default Card;
