import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { useDispatch } from 'react-redux';
import { pipe, andThen } from 'ramda';
import { navigate as onNavigate } from '@reach/router';

import { Video } from '../../types';
import { searchVideos } from '../../services/videos';
import { LoadingSpinner, VideoListVertical } from '../../components';
import { setStateAndPipeData, setPipedDataAndSetState } from '../../utils';
import { updateVideosOnQuery } from './SearchQueryResolver.logic';
import { KARAOKE_VIDEO_YOUTUBE, KARAOKE_QUERY, ROUTES } from '../../constants';
import { enqueueVideo, selectVideo } from '../../store';

export function SearchQueryResolver(): React.ReactElement {
    const [query] = useQueryParam(KARAOKE_QUERY, StringParam);
    const [, setVideoParam] = useQueryParam(KARAOKE_VIDEO_YOUTUBE, StringParam);
    const dispatch = useDispatch();

    const [videos, setVideos] = useState<readonly Video[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const onPlayVideo = (video: Video): void => {
        dispatch(selectVideo(video));
        onNavigate(ROUTES.karaoke);
        setVideoParam(video.id.videoId);
    };

    const onEnqueueVideo = (video: Video): void => {
        dispatch(enqueueVideo(video));
    };

    const setLoadingOn = setStateAndPipeData<boolean, string>(setLoading, true);
    const setVideosThenLoadingOff = setPipedDataAndSetState<readonly Video[], boolean>(setVideos, setLoading, false);

    const retrieveVideos = pipe(setLoadingOn, searchVideos, andThen(setVideosThenLoadingOff));
    useEffect(updateVideosOnQuery(query, retrieveVideos), [query]);

    return isLoading ? (
        <LoadingSpinner />
    ) : (
        <VideoListVertical videos={videos} onPlayVideo={onPlayVideo} onEnqueueVideo={onEnqueueVideo} />
    );
}
