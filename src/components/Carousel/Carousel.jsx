import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

export const Carousel = ({ slides = [], autoPlay = true, interval = 3000 }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        if (!autoPlay || length <= 1) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, length]);

    const goToSlide = (index) => setCurrent(index);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);

    if (!Array.isArray(slides) || length === 0) return null;

    return (
        <div className={styles.carousel}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, idx) => (
                    <div className={styles.slide} key={idx}>
                        <img src={slide} alt={`Slide ${idx + 1}`} className={styles.img} />
                    </div>
                ))}
            </div>

            <div className={styles.controls}>
                <button className={styles.controlBtn} onClick={prevSlide}>
                    ◀
                </button>
                <button className={styles.controlBtn} onClick={nextSlide}>
                    ▶
                </button>
            </div>

            <div className={styles.indicators}>
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.indicator} ${current === idx ? styles.active : ""}`}
                        onClick={() => goToSlide(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
