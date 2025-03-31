import { fetchTVShowsByGenre, fetchTVGenres } from '@/app/api/routes/data';
import { GenrePageProps } from '@/types';
import styles from './tvGenre.module.css';
import MediaList from '@/app/components/mediaList'
import {Film} from "lucide-react";

export default async function TvShowGenrePage({ params }: GenrePageProps) {
    const { id } = await params;
    const genreId = parseInt(id, 10);
    const TVShowsData = await fetchTVShowsByGenre(genreId, 1);
    const tvShows = TVShowsData.results;
    const genres = await fetchTVGenres();
    const genreName = genres.find((g) => g.id === genreId)?.name || 'Unknown Genre';

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>{genreName}</h1>
                </div>
                <div className={styles.count}>
                    <Film className={styles.countIcon} size={20} />
                    <span>{TVShowsData.total_results} TV shows</span>
                </div>
            </div>

            <MediaList
                initialItems={tvShows}
                genreId={genreId}
                type="tv"
            />
        </div>
    )
}
