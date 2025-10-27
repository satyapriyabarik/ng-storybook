import React from "react";
declare const NextLinkShim: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}) => import("react/jsx-runtime").JSX.Element;
export default NextLinkShim;
