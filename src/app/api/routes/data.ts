import type {GenreWithCount} from "@/types";
import {API_KEY, BASE_URL} from "@/constants";


/* --------------------------------Movie and TV genres---------------------------------- */
export async function fetchMovieGenres(): Promise<{ id: number; name: string }[]> {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
    return data.genres;
}

export async function fetchTVGenres(): Promise<{ id: number; name: string }[]> {
    const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`);
    const data = await res.json();
    return data.genres;
}

export async function fetchMoviesByGenreWithCount(genreId: number): Promise<{ results: any[]; total: number }> {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await res.json();
    return { results: data.results, total: data.total_results };
}

/* --------------------------------Samples---------------------------------- */
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
            const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genre.id}`);
            const data = await res.json();
            return { ...genre, count: data.total_results, samples: data.results.slice(0, 5) };
        })
    );
}

/* --------------------------------By Genre---------------------------------- */
export async function fetchMoviesByGenre(genreId: number, page: number = 1): Promise<any> {
    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await res.json();
    return data;
}

export async function fetchTVShowsByGenre(genreId: number, page: number = 1): Promise<any> {
    const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await res.json();
    return data;
}

/* --------------------------------Load more---------------------------------- */
export async function loadMoreMovies(genreId: number, page: number = 1): Promise<any> {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE4NWFmY2E5MTA5MzdkYmI0YjMyNTM0NGQ1OTA5NSIsIm5iZiI6MTc0MzI0MDc2MS43NzQwMDAyLCJzdWIiOiI2N2U3YmUzOWEzZDhjYzkyOGU2N2I5MmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ6jqnNwpsQ-u6OPQE1dsR4eTSQkFGAvKifz1_mqXhE'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
}

export async function loadMoreTV(genreId: number, page: number = 1): Promise<any> {
    const url = `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmE4NWFmY2E5MTA5MzdkYmI0YjMyNTM0NGQ1OTA5NSIsIm5iZiI6MTc0MzI0MDc2MS43NzQwMDAyLCJzdWIiOiI2N2U3YmUzOWEzZDhjYzkyOGU2N2I5MmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WZ6jqnNwpsQ-u6OPQE1dsR4eTSQkFGAvKifz1_mqXhE'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
}


/* --------------------------------Details---------------------------------- */
export async function fetchMovieDetails(movieId: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,videos`);
    const data = await res.json();
    return data;
}

export async function fetchTVShowDetails(tvShowId: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/tv/${tvShowId}?api_key=${API_KEY}&append_to_response=credits,videos`);
    const data = await res.json();
    return data;
}

/* --------------------------------Trending---------------------------------- */
export async function fetchTrendingMovies(timeWindow: string = "week"): Promise<any[]> {
    const res = await fetch(`${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export async function fetchTrendingTVShows(timeWindow: string = "week"): Promise<any[]> {
    const res = await fetch(`${BASE_URL}/trending/tv/${timeWindow}?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export async function fetchTrendingData(timeWindow: string = "week"): Promise<any[]> {
    const [movies, tvShows] = await Promise.all([
        fetchTrendingMovies(timeWindow),
        fetchTrendingTVShows(timeWindow)
    ]);

    return [...movies, ...tvShows];
}

