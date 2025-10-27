
import Link from "next/link";
import styles from "@/styles/Skeleton.module.css";
import React from "react";
import { Button } from "../Button";
import { FaCartPlus } from "react-icons/fa6";
import { Product } from "@/mocks/types/Product";
import { Col, Row } from "../Grid";
import { Card } from "../Card";
import { Rating } from "../Rating";
import productStyle from './ProductGrid.module.css';

interface ProductGridProps {
    products: Product[];
    isLoading?: boolean;
    skeletonCount?: number;
}

export default function ProductGrid({
    products,
    isLoading = false,
    skeletonCount = 8,
}: ProductGridProps) {
    if (!products.length && !isLoading)
        return <p className="text-center text-muted">No products found.</p>;

    return (
        <Row className="g-4 justify-content-center">
            {/* 🦴 Skeleton cards when loading */}
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
                            <div
                                className={`${styles.skeleton} ${styles.skeletonImgSm}`}
                            ></div>
                            <div
                                className={`${styles.skeleton} ${styles.skeletonTitleSm}`}
                            ></div>
                            <div
                                className={`${styles.skeleton} ${styles.skeletonTextSm}`}
                            ></div>
                            <div
                                className={`${styles.skeleton} ${styles.skeletonPriceSm}`}
                            ></div>
                            <div
                                className={`${styles.skeleton} ${styles.skeletonBtnSm}`}
                            ></div>
                        </div>
                    </Col>
                ))
                : products.map((p, idx) => (
                    <Col
                        key={p.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={3}
                        className={`product-col mb-4 ${styles.fadeIn}`} // 👈 Fade effect
                        style={{ animationDelay: `${idx * 0.05}s` }} // staggered effect
                    >
                        <Card className={`h-100 shadow-lg border-1 hover-zoom ${productStyle.productCard}`} >
                            <Link href={`/productDetails/${p.id}`}>
                                <Card.Img
                                    variant="top"
                                    src={p.image}
                                    alt={p.name}
                                    className="p-2 rounded"
                                    fill
                                />
                            </Link>

                            <Card.Body className="text-center">
                                <Card.Title className="fs-5 text-dark">
                                    {p.name}
                                </Card.Title>
                                <Card.Text className="text-muted small mb-1">
                                    {p.category}
                                </Card.Text>
                                <Card.Text className="fw-bold text-success fs-6 mb-2">
                                    ₹{p.price ?? "—"}
                                </Card.Text>
                                <div style={{ paddingLeft: "30%" }}>
                                    <Rating
                                        rating={p.reviews[0]?.rating ?? 0}
                                        max={5}
                                    />
                                </div>
                            </Card.Body>

                            <Card.Footer className="bg-white border-0 text-center">
                                <Button variant="success" size="sm"> <FaCartPlus />
                                    Add to Cart</Button>

                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
        </Row>
    );
}
