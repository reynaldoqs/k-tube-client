/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState, SetStateAction, Dispatch } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTransition, config } from 'react-spring';
import { map } from 'ramda';

import { SearchInputContainer, SearchInputEl, SourceAvatar, SearchOption, SearchIconContainer } from './elements';
import { debounce } from '../../utils';
import { IconButton } from '../IconButton';
import { FuncParam } from '../../types';

type Props = {
    readonly onSearch: FuncParam<string, void>;
};
export const SearchInput: React.FC<Props> = ({ onSearch }: Props): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const searchEmitter = (query: string): void => onSearch(query);
    const inputRef = useRef<HTMLInputElement>(null);
    const onDebounceEmit = debounce(700, searchEmitter)();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onDebounceEmit(e.target.value);
    };

    const inOutTransition: any = useTransition(isOpen, null, {
        from: { position: 'absolute', transform: `scale(0.95)`, opacity: 0 },
        enter: { transform: `scale(1)`, opacity: 1 },
        leave: { transform: `scale(0.95)`, opacity: 0 },
        config: config.stiff,
    });

    const toggleOpen = (setter: Dispatch<SetStateAction<boolean>>): void => setter((prevState: boolean) => !prevState);

    const focusInput = (ref: React.RefObject<HTMLInputElement>) => (): void => {
        // eslint-disable-next-line functional/no-expression-statement
        ref?.current?.focus();
    };

    useEffect(focusInput(inputRef), [isOpen]);

    return map(
        ({ item, key, props }: any) =>
            item ? (
                <SearchInputContainer key={key} style={props}>
                    <SourceAvatar>
                        <FontAwesomeIcon icon={faYoutube} />
                    </SourceAvatar>
                    <SearchOption>
                        <IconButton onClick={() => toggleOpen(setIsOpen)} icon={faArrowLeft} />
                    </SearchOption>
                    <SearchInputEl onChange={onChangeHandler} placeholder="Search..." ref={inputRef} />
                </SearchInputContainer>
            ) : (
                <SearchIconContainer key={key} style={props}>
                    <IconButton onClick={() => toggleOpen(setIsOpen)} icon={faSearch} />
                </SearchIconContainer>
            ),
        inOutTransition,
    );
};

export const renderSearchInput = (onSearchFunc: FuncParam<string, void>): React.ReactElement => (
    <SearchInput onSearch={onSearchFunc} />
);
