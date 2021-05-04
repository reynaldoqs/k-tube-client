/* eslint-disable functional/no-expression-statement */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { createStore } from 'redux';
import { SearchQueryResolver } from './SearchQueryResolver';
import { searchVideos } from '../../services/videos';

import { Video } from '../../types';

jest.mock('../../services/videos');

describe('<SearchQueryResolver/> component test', () => {
    it('Should render videos list', async () => {
        const videos: readonly Video[] = [
            {
                kind: 'youtube#searchResult',
                etag: 'Ez0rdOs84PIX3vk91Ea7y7J09wk',
                id: {
                    kind: 'youtube#video',
                    videoId: '8TccD2wgBCc',
                },
                snippet: {
                    publishedAt: new Date('12-04-2021'),
                    channelId: 'UCEUAipUNiN7UU37Vc9Kx8yw',
                    title: 'Video test 1',
                    description:
                        'El Polaco - Deja de llorar - Video Clip Oficial SUSCRIBITE A MI CANAL: http://goo.gl/y4Nd8R Seguime en FACEBOOK: ...',
                    thumbnails: {
                        key: {
                            url: 'https://i.ytimg.com/vi/8TccD2wgBCc/default.jpg',
                            width: 120,
                            height: 90,
                            extra: 'https://i.ytimg.com/vi/8TccD2wgBCc/hqdefault.jpg',
                        },
                    },
                    channelTitle: 'El polaco',
                },
            },
        ];

        // searchVideos.mockResolvedValueOnce(videos);
    });
});
