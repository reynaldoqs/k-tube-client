import { pipe, otherwise, always, andThen, propOr } from 'ramda';

export const extractArrayData = pipe(otherwise(always({ data: [] })), andThen(propOr([], 'data')));
