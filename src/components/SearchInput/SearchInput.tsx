import React from 'react';

import { SearchInputContainer, SearchInputEl } from './elements';
import { debounce } from '../../utils';

type Props = {
    readonly onSearch: (query: string) => void;
};
export const SearchInput: React.FC<Props> = ({ onSearch }: Props): React.ReactElement => {
    const searchEmitter = (query: string): void => onSearch(query);

    const onDebounceEmit = debounce(700, searchEmitter)();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onDebounceEmit(e.target.value);
    };
    return (
        <SearchInputContainer>
            <SearchInputEl onChange={onChangeHandler} />
        </SearchInputContainer>
    );
};
