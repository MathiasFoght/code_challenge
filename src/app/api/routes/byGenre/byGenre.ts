import {API_KEY, BASE_URL} from "@/constants";

export async function fetchMoviesByGenre(genreId: number, page: number = 1): Promise<any> {
    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data;
}

export async function fetchTVShowsByGenre(genreId: number, page: number = 1): Promise<any> {
    const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data;
}