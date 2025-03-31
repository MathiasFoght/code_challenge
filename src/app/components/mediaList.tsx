"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./mediaList.module.css"
import { loadMoreMovies, loadMoreTV } from '@/app/api/routes/data'
import {MediaListProps} from "@/types";


export default function MediaList({ initialItems, genreId, type }: MediaListProps) {
    const [items, setItems] = useState<any[]>(initialItems)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    // Load more items
    const loadMore = async () => {
        setLoading(true)
        try {
            const data = type === "movie" ? await loadMoreMovies(genreId, page + 1) : await loadMoreTV(genreId, page + 1)
            setItems([...items, ...data.results])
            setPage(page + 1)
        } catch (error) {
            console.error("Error loading more items:", error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className={styles.container}>
            {/* Fallback */}
            {items.length === 0 ? (
                <div className={styles.noResults}>
                    <p>No {type === "movie" ? "movies" : "TV shows"} found for this genre.</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {items.map((item: any, index: number) => (
                        <div
                            key={`${item.id}-${index}`}
                            className={styles.mediaCard}
                        >
                            <Link href={`/${type}/${item.id}`} className={styles.mediaLink}>
                                <div className={styles.imageContainer}>
                                    {item.poster_path ? (
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                            alt={type === "movie" ? item.title : item.name}
                                            className={styles.poster}
                                            fill
                                            sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                                        />
                                    ) : (
                                        <div className={styles.noPoster}>No Poster Available</div>
                                    )}
                                    <div className={styles.overlay}></div>
                                </div>
                                <h3 className={styles.mediaTitle}>{type === "movie" ? item.title : item.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {items.length > 0 && (
                <button onClick={loadMore} disabled={loading} className={styles.loadMoreButton}>
                    {loading ? (
                        <span className={styles.loadingText}>
                            <span className={styles.loadingSpinner}></span>
                            Loading...
                        </span>
                    ) : (
                        "Load More"
                    )}
                </button>
            )}
        </div>
    )
}
