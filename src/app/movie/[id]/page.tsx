import Image from "next/image"
import { Film, User} from "lucide-react"
import { fetchMovieDetails } from "@/app/api/routes/details/details"
import dynamic from "next/dynamic"
import type { MoviePageProps } from "@/types"
import styles from "./movie.module.css"

// Lazy load
const AddToWishlistButton = dynamic(() => import("@/app/components/buttons/addToWishlistButton"), { ssr: true })
const BackButton = dynamic(() => import("@/app/components/buttons/backButton"), { ssr: true })

export default async function MoviePage({ params }: MoviePageProps) {
    const { id } = await params
    const movie = await fetchMovieDetails(id)

    return (
        <div className={styles.container}>
            {/* Hero Section with Backdrop */}
            <section className={styles.heroSection}>
                {movie.backdrop_path && (
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={`${movie.title} backdrop`}
                        fill
                        priority
                        className={styles.backdropImage}
                    />
                )}
                <div className={styles.heroGradient}></div>

                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    {movie.tagline && <p className={styles.tagline}>{movie.tagline}</p>}
                    {movie.release_date && <span className={styles.releaseYear}>{movie.release_date.split("-")[0]}</span>}
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.movieDetails}>
                    {/* Poster */}
                    <div className={styles.posterContainer}>
                        {movie.poster_path ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
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
                        <p className={styles.overview}>{movie.overview}</p>
                        <div className={styles.detailsGrid}>
                            {movie.genres && movie.genres.length > 0 && (
                                <div className={styles.detailItem}>
                                    <p className={styles.detailLabel}>
                                        <Film size={16} style={{ display: "inline", marginRight: "4px" }} />
                                        Genre
                                    </p>
                                    <p className={styles.detailValue}>
                                        {movie.genres.map((genre: any) => genre.name).join(", ")}
                                    </p>
                                </div>
                            )}

                            {movie.credits && movie.credits.cast && movie.credits.cast.length > 0 && (
                                <div className={styles.detailItem}>
                                    <p className={styles.detailLabel}>
                                        <User size={16} style={{ display: "inline", marginRight: "4px" }} />
                                        Actors
                                    </p>
                                    <p className={styles.detailValue}>
                                        {movie.credits.cast.slice(0, 5).map((actor: any) => actor.name).join(", ")}
                                    </p>
                                </div>
                            )}

                            {movie.credits && movie.credits.crew && movie.credits.crew.length > 0 && (
                                <div className={styles.detailItem}>
                                    <p className={styles.detailLabel}>
                                        <User size={16} style={{ display: "inline", marginRight: "4px" }} />
                                        Directors
                                    </p>
                                    <p className={styles.detailValue}>
                                        {movie.credits.crew.filter((member: any) => member.job === "Director").map((director: any) => director.name).join(", ")}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Add to wishlist */}
                        <div className={styles.wishlistContainer}>
                            <AddToWishlistButton item={movie} itemType="movie" />
                        </div>

                        <BackButton />
                    </div>
                </div>
            </section>
        </div>
    )
}

