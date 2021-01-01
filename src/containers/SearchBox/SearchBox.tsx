import React from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import { SearchInput } from '../../components/';

type Props = {
    readonly onNavigateToSearch: () => void;
};

export const SearchBox: React.FC<Props> = ({ onNavigateToSearch }: Props): React.ReactElement => {
    const [_, setQuery] = useQueryParam('q', StringParam);

    const onSearchHandler = async (query: string): Promise<void> => {
        //get recentlye search items
        // emit if we resnt in search view
        console.log(query);

        onNavigateToSearch();
        setQuery(query);
    };

    return <SearchInput onSearch={onSearchHandler} />;
};
