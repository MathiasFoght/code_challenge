import {fetchTrendingData} from "@/app/api/routes/trending/trending";
import {getMovieGenresWithSamples, getTVGenresWithSamples} from "@/app/api/routes/samples/samples";
import dynamic from "next/dynamic";

// Lazy load
const HomeClient = dynamic(() => import("@/app/components/home/homeClient/homeClient"), { ssr: true });

export default async function HomePage() {
    const movieGenresWithSamples = await getMovieGenresWithSamples();
    const tvGenresWithSamples = await getTVGenresWithSamples();
    const trendingData = await fetchTrendingData("week");

    return (
        <div>
            <HomeClient
                movieGenresWithSamples={movieGenresWithSamples}
                tvGenresWithSamples={tvGenresWithSamples}
                trending={trendingData}
            />
        </div>
    );
}
