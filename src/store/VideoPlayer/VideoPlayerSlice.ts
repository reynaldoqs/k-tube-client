/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/immutable-data */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    readonly videoId: string | null;
    readonly volume: number;
    readonly progress: VideoProgress;
};

export const initialState: VideoPlayerState = {
    isPlaying: false,
    isLoading: false,
    isReady: false,
    videoId: null,
    volume: 1,
    progress: {
        playedSeconds: 0,
        played: 0,
        loadedSeconds: 0,
        loaded: 0,
    },
};

export const videoPlayerSlice = createSlice({
    name: 'videoPlayer',
    initialState,
    reducers: {
        selectVideo: (state, { payload }: PayloadAction<string>) => {
            state.isPlaying = false;
            state.isLoading = true;
            state.isReady = false;
            state.videoId = payload;
            state.progress = { playedSeconds: 0, played: 0, loadedSeconds: 0, loaded: 0 };
        },
        progress: (state, { payload }: PayloadAction<VideoProgress>) => {
            state.progress = payload;
        },
    },
});

export const { selectVideo, progress } = videoPlayerSlice.actions;

export const videoPlayerSelector = (state: RootState): VideoPlayerState => state;

export default videoPlayerSlice.reducer;
