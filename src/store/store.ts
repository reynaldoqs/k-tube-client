import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './VideoPlayer/VideoPlayerSlice';

const store = configureStore({
    reducer: playerReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
