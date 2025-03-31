import {fetchTrendingData, getMovieGenresWithSamples, getTVGenresWithSamples} from "@/app/api/routes/data";
import dynamic from "next/dynamic";

// Lazy load
const HomeClient = dynamic(() => import("@/app/components/home/homeClient/homeClient"), { ssr: true });

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
