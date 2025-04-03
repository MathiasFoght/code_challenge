import {API_KEY, BASE_URL} from "@/constants";

export async function fetchMovieDetails(movieId: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,videos`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data;
}

export async function fetchTVShowDetails(tvShowId: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/tv/${tvShowId}?api_key=${API_KEY}&append_to_response=credits,videos`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data;
}