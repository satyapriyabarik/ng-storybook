import React, { ReactNode } from "react";
interface NavBarProps {
    bg?: "light" | "dark" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "transparent";
    variant?: "light" | "dark";
    expand?: "sm" | "md" | "lg" | "xl" | "xxl";
    children: ReactNode;
    className?: string;
}
interface BrandProps {
    href?: string;
    children: ReactNode;
}
interface ToggleProps {
    ariaControls: string;
    onClick?: () => void;
}
interface CollapseProps {
    id: string;
    children: ReactNode;
    show?: boolean;
}
interface NavProps {
    children: ReactNode;
    className?: string;
}
interface NavLinkProps {
    href: string;
    children: ReactNode;
    active?: boolean;
}
export declare const NavBar: React.FC<NavBarProps> & {
    Brand: React.FC<BrandProps>;
    Toggle: React.FC<ToggleProps>;
    Collapse: React.FC<CollapseProps>;
    Nav: React.FC<NavProps> & {
        Link: React.FC<NavLinkProps>;
    };
};
export default NavBar;
