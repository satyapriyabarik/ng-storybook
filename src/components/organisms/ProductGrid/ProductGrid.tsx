import React from "react";
import Link from "next/link";
import styles from "@/styles/Skeleton.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { Product } from "@/mocks/types/Product";
import { Col, Row } from "../../layout/Grid";
import { Card } from "../../molecules/Card";
import { Rating } from "../../atoms/Rating";
import productStyle from "./ProductGrid.module.css";
import { Button } from "../../atoms/Button";

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

export default function ProductGrid({
    products,
    isLoading = false,
    skeletonCount = 8,
    renderAddToCart,
}: ProductGridProps) {
    if (!products.length && !isLoading)
        return <p className="text-center text-muted">No products found.</p>;

    return (
        <Row className="g-4 justify-content-center">
            {isLoading
                ? Array.from({ length: skeletonCount }).map((_, index) => (
                    <Col
                        key={`skeleton-${index}`}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={3}
                        className="product-col mb-4"
                    >
                        <div className={styles.skeletonCard}>
                            <div className={`${styles.skeleton} ${styles.skeletonImgSm}`} />
                            <div className={`${styles.skeleton} ${styles.skeletonTitleSm}`} />
                            <div className={`${styles.skeleton} ${styles.skeletonTextSm}`} />
                            <div className={`${styles.skeleton} ${styles.skeletonPriceSm}`} />
                            <div className={`${styles.skeleton} ${styles.skeletonBtnSm}`} />
                        </div>
                    </Col>
                ))
                : products.map((product, idx) => (
                    <Col
                        key={product.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={3}
                        className={`product-col mb-4 ${styles.fadeIn}`}
                        style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                        <Card
                            className={`h-100 shadow-lg border-1 hover-zoom ${productStyle.productCard}`}
                        >
                            <Link href={`/productDetails/${product.id}`}>
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.name}
                                    className="p-2 rounded"
                                    fill
                                />
                            </Link>

                            <Card.Body className="text-center">
                                <Card.Title className="fs-5 text-dark">
                                    {product.name}
                                </Card.Title>
                                <Card.Text className="text-muted small mb-1">
                                    {product.category}
                                </Card.Text>
                                <Card.Text className="fw-bold text-success fs-6 mb-2">
                                    ₹{product.price ?? "—"}
                                </Card.Text>
                                <div style={{ paddingLeft: "30%" }}>
                                    <Rating rating={product.reviews[0]?.rating ?? 0} max={5} />
                                </div>
                            </Card.Body>

                            <Card.Footer className="bg-white border-0 text-center">
                                {renderAddToCart ? (
                                    renderAddToCart(product)
                                ) : (
                                    <Button variant="success" size="sm">
                                        <FaCartPlus className="me-2" /> Add to Cart
                                    </Button>
                                )}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
        </Row>
    );
}
