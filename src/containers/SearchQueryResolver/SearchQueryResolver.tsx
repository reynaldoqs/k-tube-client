import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { pipe, otherwise, always, andThen, propOr } from 'ramda';

import { Video } from '../../types';
import { searchVideos } from '../../api/videos';
import { VerticalVideoList } from '../../components';

export function SearchQueryResolver(): React.ReactElement {
    const [query] = useQueryParam('q', StringParam);
    const [videos, setVideos] = useState<readonly Video[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const safeQuery = console.log('no implemente');
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const setNotLoading = (q: any) => setLoading(true);
    const getVideos = pipe(searchVideos, andThen(setVideos), setNotLoading);

    // eslint-disable-next-line functional/functional-parameters
    useEffect(() => {
        console.log('re renders | with query', query);
        setLoading(false);
        // eslint-disable-next-line functional/no-expression-statement
        query && getVideos(query);
    }, [query]);
    return <VerticalVideoList videos={videos} />;
}
