import {API_KEY, BASE_URL} from "@/constants";

export async function fetchMovieGenres(): Promise<{ id: number; name: string }[]> {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data.genres;
}

export async function fetchTVGenres(): Promise<{ id: number; name: string }[]> {
    const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data.genres;
}