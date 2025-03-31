"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {Trash2, Film, Tv, Star} from "lucide-react"
import styles from "./wishlist.module.css"

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState<any[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Get wishlist from local storage
    useEffect(() => {
        const stored = localStorage.getItem("wishlist")
        if (stored) setWishlist(JSON.parse(stored))
        setIsLoaded(true)
    }, [])

    // Remove item
    const removeFromWishlist = (id: number) => {
        const newWishlist = wishlist.filter((item) => item.id !== id)
        setWishlist(newWishlist)
        localStorage.setItem("wishlist", JSON.stringify(newWishlist))
    }

    const getItemType = (item: any): "movie" | "tv" => {
        if (item.type) return item.type
        return item.title || item.original_title ? "movie" : "tv"
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>My Favorites</h1>
            </div>

            {/* Fallback */}
            {wishlist.length === 0 ? (
                <div className={styles.fallback}>
                    <Star className={styles.icon} size={48} />
                    <p>I'm sorry. Your favorites list is empty.</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {wishlist.map((item, index) => {
                        const type = getItemType(item)
                        const title = item.title || item.name || item.original_name

                        return (
                            <div key={item.id} className={styles.card}>
                                <Link href={`/${type}/${item.id}`} className={styles.imageLink}>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={title || "Your favorite film or TV show"}
                                        className={styles.image}
                                        fill
                                    />
                                    <div className={styles.overlay}></div>
                                </Link>
                                <div className={styles.content}>
                                    <h3 className={styles.itemTitle}>{title}</h3>
                                    <div className={styles.itemType}>
                                        {type === "movie" ? (
                                            <>
                                                <Film size={14} style={{ display: "inline", marginRight: "4px" }} /> Film
                                            </>
                                        ) : (
                                            <>
                                                <Tv size={14} style={{ display: "inline", marginRight: "4px" }} /> TV-Show
                                            </>
                                        )}
                                    </div>
                                    <button className={styles.removeButton} onClick={() => removeFromWishlist(item.id)}>
                                        <Trash2 className={styles.removeIcon} size={16} />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

