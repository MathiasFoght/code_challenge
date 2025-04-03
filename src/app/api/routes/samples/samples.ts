import type {GenreWithCount} from "@/types";
import {fetchMovieGenres, fetchTVGenres} from "@/app/api/routes/genres/genres";
import {fetchMoviesByGenreWithCount, fetchTVShowsByGenreWithCount} from "@/app/api/routes/genreCount/genreCount";

export async function getMovieGenresWithSamples(): Promise<(GenreWithCount & { samples: any[] })[]> {
    const movieGenres = await fetchMovieGenres();
    return await Promise.all(
        movieGenres.map(async (genre) => {
            const { results, total } = await fetchMoviesByGenreWithCount(genre.id);
            return { ...genre, count: total, samples: results.slice(0, 5) };
        })
    );
}

export async function getTVGenresWithSamples(): Promise<(GenreWithCount & { samples: any[] })[]> {
    const tvGenres = await fetchTVGenres();
    return await Promise.all(
        tvGenres.map(async (genre) => {
            const { results, total } = await fetchTVShowsByGenreWithCount(genre.id);
            return { ...genre, count: total, samples: results.slice(0, 5) };
        })
    );
}