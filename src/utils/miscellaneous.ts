/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-let */
/* eslint-disable functional/functional-parameters */
import { curry, apply } from 'ramda';

const debounce_ = curry((immediate, timeMs, fn) => () => {
    let timeout: number | null;

    return (...args: readonly unknown[]) => {
        const later = () => {
            timeout = null;

            if (!immediate) {
                apply(fn, args);
            }
        };

        const callNow = immediate && !timeout;

        timeout && clearTimeout(timeout);
        timeout = setTimeout(later, timeMs);

        if (callNow) {
            apply(fn, args);
        }

        return timeout;
    };
});

export const debounceImmediate = debounce_(true);

export const debounce = debounce_(false);
