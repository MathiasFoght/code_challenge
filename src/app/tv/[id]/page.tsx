import Image from "next/image"
import {Film, Layers, User} from "lucide-react"
import { fetchTVShowDetails } from "@/app/api/routes/details/details"
import dynamic from "next/dynamic"
import type { TvPageProps } from "@/types"
import styles from "./tv.module.css"

// Lazy load
const AddToWishlistButton = dynamic(() => import("@/app/components/buttons/addToWishlistButton"), { ssr: true })
const BackButton = dynamic(() => import("@/app/components/buttons/backButton"), { ssr: true })

export default async function TvShowPage({ params }: TvPageProps) {
    const { id } = await params
    const tvShow = await fetchTVShowDetails(id)

    return (
        <div className={styles.container}>
            {/* Hero Section with Backdrop */}
            <section className={styles.heroSection}>
                {tvShow.backdrop_path && (
                    <Image
                        src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
                        alt={`${tvShow.name} backdrop`}
                        fill
                        priority
                        className={styles.backdropImage}
                    />
                )}
                <div className={styles.heroGradient}></div>

                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{tvShow.name}</h1>
                    {tvShow.tagline && <p className={styles.tagline}>{tvShow.tagline}</p>}
                    <div>
                        {tvShow.first_air_date && <span className={styles.releaseYear}>{tvShow.first_air_date.split("-")[0]}</span>}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.tvDetails}>
                    {/* Poster */}
                    <div className={styles.posterContainer}>
                        {tvShow.poster_path ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                                alt={tvShow.name}
                                width={300}
                                height={450}
                                className={styles.poster}
                            />
                        ) : (
                            <div>No Poster</div>
                        )}
                    </div>

                    {/* Info + details */}
                    <div className={styles.infoContainer}>
                        <p className={styles.overview}>{tvShow.overview}</p>
                        <div className={styles.detailsGrid}>
                            {tvShow.genres && tvShow.genres.length > 0 && (
                                <div className={styles.detailItem}>
                                    <p className={styles.detailLabel}>
                                        <Film size={16} style={{ display: "inline", marginRight: "4px" }} />
                                        Genre
                                    </p>
                                    <p className={styles.detailValue}>
                                        {tvShow.genres.map((genre: any) => genre.name).join(", ")}
                                    </p>
                                </div>
                            )}

                            {tvShow.credits && tvShow.credits.cast && tvShow.credits.cast.length > 0 && (
                                <div className={styles.detailItem}>
                                    <p className={styles.detailLabel}>
                                        <User size={16} style={{ display: "inline", marginRight: "4px" }} />
                                        Actors
                                    </p>
                                    <p className={styles.detailValue}>
                                        {tvShow.credits.cast.slice(0, 5).map((actor: any) => actor.name).join(", ")}
                                    </p>
                                </div>
                            )}

                            <div className={styles.detailsGrid}>
                                {tvShow.number_of_seasons > 0 && (
                                    <div className={styles.detailItem}>
                                        <p className={styles.detailLabel}>
                                            <Layers size={16} style={{ display: "inline", marginRight: "4px" }} />
                                            Seasons
                                        </p>
                                        <p className={styles.detailValue}>{tvShow.number_of_seasons}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Add to wishlist */}
                        <div className={styles.wishlistContainer}>
                            <AddToWishlistButton item={tvShow} itemType="tv" />
                        </div>

                        <BackButton />
                    </div>
                </div>
            </section>
        </div>
    )
}

