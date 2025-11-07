import React from "react";
import { Product } from "@/mocks/types/Product";
interface ProductGridProps {
    products: Product[];
    isLoading?: boolean;
    skeletonCount?: number;
    /**
     * Render prop for Add to Cart button
     * Receives full Product object for full IntelliSense
     */
    renderAddToCart?: (product: Product) => React.ReactNode;
}
export default function ProductGrid({ products, isLoading, skeletonCount, renderAddToCart, }: ProductGridProps): import("react/jsx-runtime").JSX.Element;
export {};
