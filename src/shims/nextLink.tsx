import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

export default function Link({ href, children, ...rest }: LinkProps) {
    // simple stub for storybook environment
    return (
        <a href={href} {...rest} style={{ textDecoration: "none", color: "inherit" }}>
            {children}
        </a>
    );
}
