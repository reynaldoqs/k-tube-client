import { AxiosResponse } from 'axios';

import { videosApi } from '../../config';
import { crudder } from '../';
import { Video } from '../../types';

const videos = crudder(videosApi, 'videos');

export const searchVideos = (query: string): Promise<AxiosResponse<readonly Video[]>> =>
    videos('search').read({ params: { query } });
