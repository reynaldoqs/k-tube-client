import axios from 'axios';
import { curry } from 'ramda';

type CrudderParams = {
    readonly data?: unknown;
    readonly params?: unknown;
    readonly headers?: unknown;
};

export const crudder = curry((hostname: string, resource: string, path: string) => {
    const url = `${hostname}/${resource}/${path}`;
    return {
        read: <T = unknown>(readData: CrudderParams) =>
            axios.get<T>(url, {
                params: readData.params,
            }),
    };
});
