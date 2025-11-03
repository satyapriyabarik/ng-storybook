import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
    title: "Atoms/Table",
    component: Table,
    tags: ["autodocs"],
    argTypes: {
        bordered: {
            control: "boolean",
            description: "Adds borders to all table cells",
        },
        hover: {
            control: "boolean",
            description: "Highlights rows on hover",
        },
        striped: {
            control: "boolean",
            description: "Adds zebra-striping to rows",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "Adjusts table size and padding",
        },
        variant: {
            control: "select",
            options: ["light", "dark"],
            description: "Sets background and text color theme",
        },
        responsive: {
            control: "select",
            options: [false, true, "sm", "md", "lg", "xl", "xxl"],
            description: "Makes table scroll horizontally on small screens",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleRows = (
    <>
        <thead>
            <tr>
                <th>#</th>
                <th>Plant</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Rose</td>
                <td>Flower</td>
                <td>$5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Aloe Vera</td>
                <td>Succulent</td>
                <td>$8</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Fern</td>
                <td>Indoor</td>
                <td>$10</td>
            </tr>
        </tbody>
    </>
);

// ------------------------------------------------------
// Default Story
// ------------------------------------------------------
export const Default: Story = {
    args: {
        bordered: false,
        hover: false,
        striped: false,
        size: "md",
        variant: "light",
        responsive: false,
        children: sampleRows,
    },
};

// ------------------------------------------------------
// Bordered Table
// ------------------------------------------------------
export const Bordered: Story = {
    args: {
        ...Default.args,
        bordered: true,
    },
};

// ------------------------------------------------------
// Striped and Hoverable Table
// ------------------------------------------------------
export const StripedHover: Story = {
    args: {
        ...Default.args,
        striped: true,
        hover: true,
    },
};

// ------------------------------------------------------
// Dark Variant
// ------------------------------------------------------
export const DarkVariant: Story = {
    args: {
        ...Default.args,
        variant: "dark",
        bordered: true,
        striped: true,
    },
};

// ------------------------------------------------------
// Responsive Table
// ------------------------------------------------------
export const Responsive: Story = {
    args: {
        ...Default.args,
        responsive: "md",
    },
};
