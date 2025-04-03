import {ACCESS_TOKEN, BASE_URL} from "@/constants";

export async function loadMoreMovies(genreId: number, page: number = 1): Promise<any> {
    const url = `${BASE_URL}/discover/movie?with_genres=${genreId}&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
}

export async function loadMoreTV(genreId: number, page: number = 1): Promise<any> {
    const url = `${BASE_URL}/discover/tv?with_genres=${genreId}&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
}