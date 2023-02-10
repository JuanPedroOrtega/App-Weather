import { createFeature, createReducer, on } from '@ngrx/store';

import { decrease, increase, reset } from './counter.actions';

type State = {
    counter: number
};
export const initialState: State = {
    counter: 0
};

export const counterFeature = createFeature({
    name: 'counter',
    reducer: createReducer<State>(
        initialState,
        on(increase, (state: State) => ({ counter: state.counter + 1 })),
        on(decrease, (state: State) => ({ counter: state.counter - 1 })),
        on(reset, (_state: State) => initialState),
    )
});

export const {
    name,
    reducer,
    selectCounterState,
    selectCounter
} = counterFeature;
