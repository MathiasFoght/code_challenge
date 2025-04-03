'use client'

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import styles from "./mediaCard.module.css"
import type {  MediaCardProps } from "@/types"



export default function MediaCard({ item, type }: MediaCardProps) {
    const title = item.title || item.name || ""
    const date = item.release_date || item.first_air_date
    const year = date ? date.substring(0, 4) : "Coming soon"
    const linkPath = `/${type}/${item.id}`

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <Link href={linkPath} className={styles.cardLink}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={styles.posterImage}
                        />
                        <div className={styles.imageOverlay}></div>
                        {item.vote_average && (
                            <div className={styles.ratingBadge}>
                                <Star className={styles.starIcon} />
                                {item.vote_average.toFixed(1)}
                            </div>
                        )}
                    </div>
                    <div className={styles.cardInfo}>
                        <h4 className={styles.cardTitle}>{title}</h4>
                        <p className={styles.cardDate}>{year}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

