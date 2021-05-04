import { pipe, otherwise, always, andThen, propOr } from 'ramda';

import { videosApi } from '../../config';
import { crudder } from '..';
import { Video } from '../../types';

const videos = crudder(videosApi, 'videos');

const safeResponse = pipe(otherwise(always({ data: [] })), andThen<unknown, readonly Video[]>(propOr([], 'data')));

export const searchVideos = (query: string): Promise<readonly Video[]> =>
    safeResponse(videos('search').read({ params: { query } }));
