import HomeClient from "@/app/components/home/homeClient/homeClient"
import {fetchTrendingData, getMovieGenresWithSamples, getTVGenresWithSamples} from "@/app/api/routes/data";

export default async function HomePage() {
    const movieGenresWithSamples = await getMovieGenresWithSamples();
    const tvGenresWithSamples = await getTVGenresWithSamples();
    const trendingMovies = await fetchTrendingData("week");

    return (
        <div>
            <HomeClient
                movieGenresWithSamples={movieGenresWithSamples}
                tvGenresWithSamples={tvGenresWithSamples}
                trendingMovies={trendingMovies}
            />
        </div>
    );
}
