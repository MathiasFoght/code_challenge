"use client";

import Hero from "@/app/components/home/hero/hero";
import MediaSection from "@/app/components/home/mediaSection/mediaSection";
import { HomeClientProps } from "@/types"

export default function HomeClient({ movieGenresWithSamples, tvGenresWithSamples, trendingMovies }: HomeClientProps) {

    const handleCallToActionClick = () => {
        window.location.href = "/wishlist";
    };

    return (
        <div>
            <Hero
                title="What's Trending This Week"
                description="MovieUniverse - explore the universe of movies and TV shows"
                imageSrc="/placeholder.svg?height=1080&width=1920"
                callToActionButtonText="See your favorites"
                secondaryButtonText="See your favorites"
                onCallToActionClick={handleCallToActionClick}
                trendingData={trendingMovies}
            />

            <MediaSection
                title="Films"
                genres={movieGenresWithSamples}
                type="movie"
            />

            <MediaSection
                title="TV Shows"
                genres={tvGenresWithSamples}
                type="tv"
            />
        </div>
    );
}
