import React, { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from "react";
interface DropdownProps {
    align?: "start" | "end";
    children: ReactNode;
    className?: string;
}
export declare const Dropdown: React.FC<DropdownProps> & {
    Toggle: React.FC<DropdownToggleProps>;
    Menu: React.FC<DropdownMenuProps>;
    Item: React.FC<DropdownItemProps>;
    Divider: React.FC;
};
interface DropdownToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    id?: string;
    children: ReactNode;
}
interface DropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
    children: ReactNode;
}
interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}
export default Dropdown;
