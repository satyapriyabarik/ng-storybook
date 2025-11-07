import { Product } from "@/mocks/types/Product";
interface AddToCartButtonProps {
    product: Product;
    imageSelector?: string;
    onAddToCart?: (product: Product) => void;
}
export default function AddToCartButton({ product, imageSelector, onAddToCart, }: AddToCartButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
