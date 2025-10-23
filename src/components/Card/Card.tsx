import React, { ReactNode, HTMLAttributes, forwardRef, ElementType } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Card.module.css";

// ----------------------------
// Base Card
// ----------------------------
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const CardBase = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className = "", ...props }, ref) => (
        <div ref={ref} className={clsx(styles.card, className)} {...props}>
            {children}
        </div>
    )
);
CardBase.displayName = "Card";

// ----------------------------
// Subcomponents
// ----------------------------
const Header: React.FC<CardProps> = ({ children, className = "", ...props }) => (
    <div className={clsx(styles.cardHeader, className)} {...props}>
        {children}
    </div>
);
Header.displayName = "Card.Header";

const Body: React.FC<CardProps> = ({ children, className = "", ...props }) => (
    <div className={clsx(styles.cardBody, className)} {...props}>
        {children}
    </div>
);
Body.displayName = "Card.Body";

const Footer: React.FC<CardProps> = ({ children, className = "", ...props }) => (
    <div className={clsx(styles.cardFooter, className)} {...props}>
        {children}
    </div>
);
Footer.displayName = "Card.Footer";

// ✅ FIXED: Proper typing for `as` prop
interface TitleProps extends CardProps {
    as?: ElementType;
}

const Title: React.FC<TitleProps> = ({
    children,
    className = "",
    as: Component = "h3",
    ...props
}) => (
    <Component className={clsx(styles.cardTitle, className)} {...props}>
        {children}
    </Component>
);
Title.displayName = "Card.Title";

const Text: React.FC<CardProps> = ({ children, className = "", ...props }) => (
    <p className={clsx(styles.cardText, className)} {...props}>
        {children}
    </p>
);
Text.displayName = "Card.Text";

// ----------------------------
// Image
// ----------------------------
interface CardImgProps extends Omit<React.ComponentProps<typeof Image>, "alt"> {
    variant?: "top" | "bottom" | "rounded" | "circle";
    alt: string;
}

const Img: React.FC<CardImgProps> = ({
    variant,
    className = "",
    alt,
    fill,
    width,
    height,
    style,
    ...props
}) => {
    let variantClass = "";
    switch (variant) {
        case "top":
            variantClass = styles.top;
            break;
        case "bottom":
            variantClass = styles.bottom;
            break;
        case "rounded":
            variantClass = styles.rounded;
            break;
        case "circle":
            variantClass = styles.circle;
            break;
    }

    const isFill = !!fill;

    return (
        <div
            className={clsx(styles.cardImageWrapper, variantClass, className)}
            style={{
                position: "relative",
                width: "100%",
                height: height ? `${height}px` : "250px",
                overflow: "hidden",
                borderRadius: "inherit",
            }}
        >
            <Image
                alt={alt}
                fill={isFill}
                width={!isFill ? width : undefined}
                height={!isFill ? height : undefined}
                className={clsx(styles.cardImage)}
                style={{ objectFit: "cover", ...style }}
                {...props}
            />
        </div>
    );
};
Img.displayName = "Card.Img";

// ----------------------------
// Export Card with subcomponents
// ----------------------------
export const Card = Object.assign(CardBase, {
    Header,
    Body,
    Footer,
    Title,
    Text,
    Img,
});

export default Card;
