import { Product } from "@/mocks/types/Product";
import { FaCartPlus } from "react-icons/fa";
import { flyToCart } from "@/utils/flyToCart";
import { Button } from "../atoms/Button";

interface AddToCartButtonProps {
    product: Product;
    imageSelector?: string; // optional CSS selector for the image
    onAddToCart?: (product: Product) => void; // 🔹 callback handled by parent
}

export default function AddToCartButton({
    product,
    imageSelector,
    onAddToCart,
}: AddToCartButtonProps) {
    const handleAddToCart = () => {
        // ✅ Let parent handle cart logic
        if (onAddToCart) {
            onAddToCart(product);
        }

        // ✅ Run fly animation only if DOM is available
        if (typeof window !== "undefined") {
            const imgEl = imageSelector
                ? document.querySelector(imageSelector)
                : document.querySelector(`img[alt="${product.name}"]`);

            const cartIcon = document.querySelector("a[title='Shopping Cart']");

            if (imgEl instanceof HTMLImageElement && cartIcon instanceof HTMLElement) {
                flyToCart(imgEl, cartIcon);
            }
        }
    };

    return (
        <Button
            variant="success"
            size="sm"
            onClick={handleAddToCart}
            aria-label="Add to Cart"
        >
            <FaCartPlus />
            Add to Cart
        </Button>
    );
}
