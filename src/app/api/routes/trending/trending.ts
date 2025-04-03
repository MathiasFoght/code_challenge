import {API_KEY, BASE_URL} from "@/constants";

async function fetchTrendingMovies(timeWindow: string = "week"): Promise<any[]> {
    const res = await fetch(`${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`, {next: { revalidate: 86400 }});
    const data = await res.json();
    return data.results;
}

async function fetchTrendingTVShows(timeWindow: string = "week"): Promise<any[]> {
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
