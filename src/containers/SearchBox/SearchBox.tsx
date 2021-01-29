import React from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import { renderSearchInput } from '../../components/';
import { FuncEmpty } from '../../types';
import { navigateAndSetQuery } from './SearchBox.logic';

type Props = {
    readonly navigateToSearch: FuncEmpty;
};

export const SearchBox: React.FC<Props> = ({ navigateToSearch }: Props): React.ReactElement => {
    const [, setQuery] = useQueryParam('q', StringParam);
    const searchHandler = navigateAndSetQuery(setQuery, navigateToSearch);
    return renderSearchInput(searchHandler);
};
