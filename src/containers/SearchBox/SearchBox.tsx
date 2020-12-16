import React from 'react';

import { SearchInput } from '../../components/';
import { useSearchVideos } from './SearchBoxLogic';

export function SearchBox(): React.ReactElement {
    const onSearchHandler = (query: string): void => {
        console.log(query);
    };
    return (
        <div>
            <div>
                <SearchInput onSearch={onSearchHandler} />
            </div>
            <pre>{JSON.stringify({}, null, 2)}</pre>
        </div>
    );
}
