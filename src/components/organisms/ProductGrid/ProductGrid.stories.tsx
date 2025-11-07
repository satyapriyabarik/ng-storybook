import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ProductGrid from "./ProductGrid";
import { sampleProducts } from "@/mocks/api";
import AddToCartButton from "@/components/addToCart/AddToCartButton";

// ---------------------- Meta Configuration ----------------------
const meta: Meta<typeof ProductGrid> = {
    title: "Molecules/ProductGrid",
    component: ProductGrid,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

// ---------------------- Default Story ----------------------
export const Default: Story = {
    args: {
        products: sampleProducts,
        renderAddToCart: (product) => (
            <AddToCartButton product={product} />
        ),
    },
};

// ---------------------- With Custom Button Component ----------------------
// Example if you have a reusable AddToCartButton component
// export const WithCustomButton: Story = {
//   args: {
//     products: mockProducts,
//     renderAddToCart: (product) => <AddToCartButton product={product} />,
//   },
// };

// -----------
