import React, { ReactNode, HTMLAttributes } from "react";
interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
    children?: ReactNode;
    className?: string;
    flush?: boolean;
    emptyMessage?: string;
}
type BaseItemProps = {
    children: ReactNode;
    className?: string;
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
} & HTMLAttributes<HTMLElement>;
export type ListGroupItemProps = (BaseItemProps & {
    as?: "li" | "button";
    href?: never;
}) | (BaseItemProps & {
    as?: "Link";
    href?: string;
});
export declare const ListGroup: React.FC<ListGroupProps> & {
    Item: React.FC<ListGroupItemProps>;
};
export default ListGroup;
