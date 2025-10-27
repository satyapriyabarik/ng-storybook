import { Product } from "@/mocks/types/Product";
interface ProductGridProps {
    products: Product[];
    isLoading?: boolean;
    skeletonCount?: number;
}
export default function ProductGrid({ products, isLoading, skeletonCount, }: ProductGridProps): import("react/jsx-runtime").JSX.Element;
export {};
