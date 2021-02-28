/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/immutable-data */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video } from '../../types';

import { RootState } from '../store';

export type VideoProgress = {
    readonly playedSeconds: number;
    readonly played: number;
    readonly loadedSeconds: number;
    readonly loaded: number;
};

export type VideoPlayerState = {
    readonly isPlaying: boolean;
    readonly isLoading: boolean;
    readonly isReady: boolean;
    readonly video: Video | null;
    readonly volume: number;
    readonly progress: VideoProgress;
    readonly videosQueue: readonly Video[];
};

export const initialState: VideoPlayerState = {
    isPlaying: false,
    isLoading: false,
    isReady: false,
    video: null,
    volume: 1,
    progress: {
        playedSeconds: 0,
        played: 0,
        loadedSeconds: 0,
        loaded: 0,
    },
    videosQueue: [],
};

export const videoPlayerSlice = createSlice({
    name: 'videoPlayer',
    initialState,
    reducers: {
        selectVideo: (state, { payload }: PayloadAction<Video>) => {
            state.isPlaying = false;
            state.isLoading = true;
            state.isReady = false;
            state.video = payload;
            state.progress = { playedSeconds: 0, played: 0, loadedSeconds: 0, loaded: 0 };
        },
        videoProgress: (state, { payload }: PayloadAction<VideoProgress>) => {
            state.progress = payload;
        },
        playVideo: (state) => {
            state.progress = { playedSeconds: 0, played: 0, loadedSeconds: 0, loaded: 0 };
            state.isPlaying = state.isReady ? true : false;
        },
        pauseVideo: (state) => {
            state.isPlaying = false;
        },
        videoReady: (state) => {
            state.isLoading = false;
            state.isReady = true;
        },
        enqueueVideo: (state, { payload }: PayloadAction<Video>) => {
            state.videosQueue = [...state.videosQueue, payload];
        },
        dequeueVideo: (state) => {
            state.isPlaying = false;
            state.isLoading = true;
            state.isReady = false;
            state.video = state.videosQueue.shift() ?? null;
            state.progress = { playedSeconds: 0, played: 0, loadedSeconds: 0, loaded: 0 };
        },
    },
});

export const {
    selectVideo,
    videoProgress,
    playVideo,
    pauseVideo,
    enqueueVideo,
    dequeueVideo,
    videoReady,
} = videoPlayerSlice.actions;

export const videoPlayerSelector = (state: RootState): VideoPlayerState => state;

export default videoPlayerSlice.reducer;
