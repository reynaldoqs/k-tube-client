import { FuncParam } from '../../types';

export const updateVideosOnQuery = (
    query: string | null | undefined,
    videoUpdaterCb: FuncParam<string, Promise<void>>,
) => (): void => {
    // eslint-disable-next-line functional/no-expression-statement
    query && videoUpdaterCb(query);
};
