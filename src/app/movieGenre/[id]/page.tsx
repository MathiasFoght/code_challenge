import { Film } from "lucide-react"
import { fetchMoviesByGenre, fetchMovieGenres } from "@/app/api/routes/data"
import type { GenrePageProps } from "@/types"
import styles from "./movieGenre.module.css"
import MediaList from "@/app/components/mediaList"

export default async function MovieGenrePage({ params }: GenrePageProps) {
    const { id } = await params
    const genreId = Number.parseInt(id, 10)
    const moviesData = await fetchMoviesByGenre(genreId, 1)
    const movies = moviesData.results
    const genres = await fetchMovieGenres()
    const genreName = genres.find((g) => g.id === genreId)?.name || "Unknown Genre"

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>{genreName}</h1>
                </div>
                <div className={styles.count}>
                    <Film className={styles.countIcon} size={20} />
                    <span>{moviesData.total_results} films</span>
                </div>
            </div>

            <MediaList
                initialItems={movies}
                genreId={genreId}
                type="movie"
            />
        </div>
    )
}

