"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Star} from "lucide-react";
import styles from "./hero.module.css";
import { HeroProps } from "@/types";

export default function Hero({
     callToActionButtonText,
     onCallToActionClick,
     trendingData,
    }: HeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle the interval slideshow of trending data
    useEffect(() => {
        if (trendingData.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % trendingData.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [trendingData]);

    // Check if data is empty
    if (trendingData.length === 0) {
        return <div>Cannot find data...</div>;
    }

    const currentItem = trendingData[currentIndex];
    const displayTitle = currentItem.title || currentItem.name || "Unknown Title";
    const displayOverview = currentItem.overview;
    const imageSrc = currentItem.poster_path ? `https://image.tmdb.org/t/p/w780${currentItem.poster_path}` : "https://placehold.co/600x400";

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroGradient}></div>
            <Image
                src={imageSrc}
                alt={displayTitle}
                fill
                className={styles.posterImage}
                loading="lazy"
            />
            <div className={`${styles.pageContainer} ${styles.heroContent}`}>
                <h1 className={styles.heroMainTitle}>Whats Trending This Week</h1>
                <h2 className={styles.heroTitle}>{displayTitle}</h2>
                <p className={styles.heroDescription}>{displayOverview}</p>

                {/* Call to action */}
                <div className={styles.buttonContainer}>
                    <button className={styles.primaryButton} onClick={onCallToActionClick}>
                        <Star className={styles.buttonIcon} size={20} />
                        {callToActionButtonText}
                    </button>
                </div>
            </div>
        </section>
    );
}
