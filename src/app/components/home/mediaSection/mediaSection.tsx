'use client'

import Link from "next/link"
import MediaCard from "@/app/components/home/mediaCard/mediaCard"
import styles from "./mediaSection.module.css"
import {MediaSectionProps} from "@/types";

export default function MediaSection({ title, genres, type }: MediaSectionProps) {
    const sectionClass =
        type === "movie"
            ? `${styles.contentSection} ${styles.movieSection}`
            : `${styles.contentSection} ${styles.tvSection}`

    return (
        <section id={type === "movie" ? "movies" : "tv-shows"} className={sectionClass}>
            <div className={styles.pageContainer}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.sectionTitleUnderline}>{title}</span>
                    </h2>
                </div>

                {genres.map((genre) => (
                    <div key={genre.id} className={styles.genreContainer}>
                        <div className={styles.genreHeader}>
                            <h3 className={styles.genreTitle}>
                                <Link href={`/${type === "movie" ? "movieGenre" : "tv"}/${genre.id}`} className={styles.genreTitleLink}>
                                    {genre.name}
                                    <span className={styles.genreCount}>
                    ({genre.count} {type === "movie" ? "films" : "shows"})
                  </span>
                                </Link>
                            </h3>
                            <Link href={`/${type === "movie" ? "movieGenre" : "tvGenre"}/${genre.id}`} className={styles.moreLink}>
                                See More
                            </Link>
                        </div>
                        <div className={styles.mediaGrid}>
                            {genre.samples.map((item) => (
                                <MediaCard key={item.id} item={item} type={type} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

