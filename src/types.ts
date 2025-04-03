export type GenrePageProps = {
    params: { id: string};
};

export type MoviePageProps = {
    params: { id: string };
};

export type TvPageProps = {
    params: { id: string };
};

export type GenreWithCount = {
    id: number
    name: string
    count: number
}

export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    [key: string]: any;
};

export type Genre = {
    id: number
    name: string
    count: number
    samples: MediaItem[]
}

export type MediaSectionProps = {
    title: string
    genres: Genre[]
    type: "movie" | "tv"
}

export type MediaItem = {
    id: number
    title?: string
    name?: string
    poster_path: string
    vote_average?: number
    release_date?: string
    first_air_date?: string
}

export type MediaCardProps = {
    item: MediaItem
    type: "movie" | "tv"
}

export type HeroProps = {
    title: string
    description: string
    imageSrc: string
    callToActionButtonText: string
    secondaryButtonText: string
    onCallToActionClick?: () => void;
    onSecondaryClick?: () => void;
    trendingData: TrendingItem[];
}

export type GenreWithSamples = {
    id: number;
    name: string;
    count: number;
    samples: MediaItem[];
}

export type TrendingItem = {
    id: number;
    media_type: 'movie' | 'tv';
    name?: string;
    title?: string;
    poster_path: string | null;
    overview: string;
};

export type HomeClientProps = {
    movieGenresWithSamples: GenreWithSamples[];
    tvGenresWithSamples: GenreWithSamples[];
    trending: TrendingItem[];
};

export type AddToWishlistButtonProps = {
    item: any;
    itemType: 'movie' | 'tv';
}

export type MediaListProps = {
    initialItems: any[]
    genreId: number
    type: "movie" | "tv"
}

export type LoadMoreButtonProps = {
    onClick: () => void;
    loading: boolean;
}

