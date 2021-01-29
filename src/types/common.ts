export type FuncEmpty<T = void> = () => T;
export type FuncParam<T, R = T> = (value: T) => R;
