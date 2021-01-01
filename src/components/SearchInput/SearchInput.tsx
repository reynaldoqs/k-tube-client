import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTransition } from 'react-spring';

import { SearchInputContainer, SearchInputEl, SourceAvatar, SearchOption, SearchIconContainer } from './elements';
import { debounce } from '../../utils';
import { IconButton } from '../IconButton';

type Props = {
    readonly onSearch: (query: string) => void;
};
export const SearchInput: React.FC<Props> = ({ onSearch }: Props): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const searchEmitter = (query: string): void => onSearch(query);
    const inputRef = useRef<HTMLInputElement>(null);
    const onDebounceEmit = debounce(700, searchEmitter)();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onDebounceEmit(e.target.value);
    };

    const openCloseTransitions: any = useTransition(isOpen, null, {
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1.2)' },
        leave: { opacity: 0, transform: 'scale(0)' },
    });

    // eslint-disable-next-line functional/functional-parameters
    const toggleOpen = (): void => setIsOpen(!isOpen);

    // eslint-disable-next-line functional/functional-parameters
    useEffect(() => {
        //TODO: use ramda to improve this
        // eslint-disable-next-line functional/no-expression-statement
        inputRef && inputRef.current && inputRef.current.focus();
    }, [isOpen]);
    return openCloseTransitions.map(({ item, key, prop }: any) =>
        item ? (
            <SearchInputContainer key={key} style={prop}>
                <SourceAvatar>
                    <FontAwesomeIcon icon={faYoutube} />
                </SourceAvatar>
                <SearchOption>
                    <IconButton onClick={toggleOpen} icon={faArrowLeft} />
                </SearchOption>
                <SearchInputEl onChange={onChangeHandler} placeholder="Search..." ref={inputRef} />
            </SearchInputContainer>
        ) : (
            <SearchIconContainer key={key} style={prop}>
                <IconButton onClick={toggleOpen} icon={faSearch} />
            </SearchIconContainer>
        ),
    );
};
