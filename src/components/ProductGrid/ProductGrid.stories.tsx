import type { Meta, StoryObj } from "@storybook/react";
import ProductGrid from "./ProductGrid";
import type { Product } from "@/mocks/types/Product";
import { sampleProducts } from "@/mocks/api";

const meta: Meta<typeof ProductGrid> = {
    title: "Components/ProductGrid",
    component: ProductGrid,
    tags: ["autodocs"],
    parameters: {
        layout: "padded", // better spacing
    },
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

// ✅ Mock Data


// ✅ Default Story
export const Default: Story = {
    args: {
        products: sampleProducts,
        isLoading: false,
    },
};

// ✅ Loading Skeleton Story
export const Loading: Story = {
    args: {
        products: [],
        isLoading: true,
        skeletonCount: 6,
    },
};

// ✅ Empty List Story
export const Empty: Story = {
    args: {
        products: [],
        isLoading: false,
    },
};
