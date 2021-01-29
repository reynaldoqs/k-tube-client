import { FuncEmpty } from '../../types';

export const navigateAndSetQuery = (
    setQueryCb: (val: string) => void,
    onNavigateCb: FuncEmpty,
): ((query: string) => void) => {
    return (query: string) => {
        onNavigateCb();
        setQueryCb(query);
    };
};
