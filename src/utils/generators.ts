import { curry } from 'ramda';

export const randomNumberPostfix = curry(
    (postFix: string, min: number, max: number) => Math.floor(Math.random() * (max - min)) + min + postFix,
);
