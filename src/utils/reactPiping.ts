import { Dispatch, SetStateAction } from 'react';

export const setStateAndPipeData = <V, P>(setStateCb: Dispatch<SetStateAction<V>>, value: V): ((pipedData: P) => P) => {
    return (pipedData: P): P => {
        setStateCb(value);
        return pipedData;
    };
};

export const setPipedDataAndSetState = <P, V>(
    setPipedDataCb: Dispatch<SetStateAction<P>>,
    setStateCb: Dispatch<SetStateAction<V>>,
    value: V,
): ((pipedData: P) => void) => {
    return (pipedData: P) => {
        setPipedDataCb(pipedData);
        setStateCb(value);
    };
};
