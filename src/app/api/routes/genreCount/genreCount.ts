import {API_KEY, BASE_URL} from "@/constants";

export async function fetchMoviesByGenreWithCount(genreId: number): Promise<{ results: any[]; total: number }> {
    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return { results: data.results, total: data.total_results };
}

export async function fetchTVShowsByGenreWithCount(genreId: number): Promise<{ results: any[]; total: number }> {
    const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return { results: data.results, total: data.total_results };
}