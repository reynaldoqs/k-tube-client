import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { pipe, andThen } from 'ramda';
import { navigate } from '@reach/router';

import { Video } from '../../types';
import { searchVideos } from '../../api/videos';
import { RenderSpinner, renderVideoList } from '../../components';
import { setStateAndPipeData, setPipedDataAndSetState } from '../../utils';
import { updateVideosOnQuery, navigateAndSetVideo } from './SearchQueryResolver.logic';
import { KARAOKE_VIDEO_YOUTUBE, KARAOKE_QUERY, ROUTES } from '../../constants';

export function SearchQueryResolver(): React.ReactElement {
    const [query] = useQueryParam(KARAOKE_QUERY, StringParam);
    const [, setVideoParam] = useQueryParam(KARAOKE_VIDEO_YOUTUBE, StringParam);
    const [videos, setVideos] = useState<readonly Video[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const onSelectVideo = navigateAndSetVideo(navigate, ROUTES.player, setVideoParam);

    const setLoadingOn = setStateAndPipeData<boolean, string>(setLoading, true);
    const setLoadingOff = setPipedDataAndSetState<readonly Video[], boolean>(setVideos, setLoading, false);

    const retrieveVideos = pipe(setLoadingOn, searchVideos, andThen(setLoadingOff));
    useEffect(updateVideosOnQuery(query, retrieveVideos), [query]);

    return isLoading ? RenderSpinner() : renderVideoList(videos, onSelectVideo);
}
