import { useState, useEffect } from 'react';

import { Video } from '../../types';
import { searchVideos } from '../../api/videos';

type SearchVideosHook = {
    readonly isLoading: boolean;
    readonly videos: readonly Video[];
};
export const useSearchVideos = (initialQuery: string): SearchVideosHook => {
    const [query, setQuery] = useState<string>(initialQuery);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [videos, setVideos] = useState<readonly Video[]>([]);

    const onSearch = (searchQuery: string) => {};

    const fetch = (query: string) => {
        setLoading(true);
        // eslint-disable-next-line functional/no-expression-statement
        searchVideos(query).then((response) => {
            const videos: readonly Video[] = response.data;
            setVideos(videos);
        });
    };
    // eslint-disable-next-line functional/no-return-void
    function Effect(): void {
        fetch(query);
    }

    useEffect(Effect, [query]);
    return {
        isLoading,
        videos,
    };
};
