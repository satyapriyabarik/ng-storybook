import React from "react";

const NextLinkShim = ({
    href,
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
        {children}
    </a>
);

export default NextLinkShim;
