/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState, SetStateAction, Dispatch } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchInputContainer, SearchInputEl, SourceAvatar, SearchOption, SearchIconContainer } from './elements';
import { IconButton } from '../IconButton';
import { FuncParam } from '../../types';

type Props = {
    readonly onSearch: FuncParam<string, void>;
};
export const SearchInput: React.FC<Props> = ({ onSearch }: Props): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const onEmittHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line functional/no-expression-statement
        e.key === 'Enter' && onSearch(query);
    };

    const toggleOpen = (setter: Dispatch<SetStateAction<boolean>>): void => setter((prevState: boolean) => !prevState);

    const focusInput = (ref: React.RefObject<HTMLInputElement>) => (): void => {
        // eslint-disable-next-line functional/no-expression-statement
        ref?.current?.focus();
    };

    useEffect(focusInput(inputRef), [isOpen]);

    return isOpen ? (
        <SearchInputContainer>
            <SourceAvatar>
                <FontAwesomeIcon icon={faYoutube} />
            </SourceAvatar>
            <SearchOption>
                <IconButton onClick={() => toggleOpen(setIsOpen)} icon={faArrowLeft} />
            </SearchOption>
            <SearchInputEl
                onChange={onChangeHandler}
                onKeyDown={onEmittHandler}
                placeholder="Search..."
                ref={inputRef}
            />
        </SearchInputContainer>
    ) : (
        <SearchIconContainer>
            <IconButton onClick={() => toggleOpen(setIsOpen)} icon={faSearch} />
        </SearchIconContainer>
    );
};
