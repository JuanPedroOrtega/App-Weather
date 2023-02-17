import { createAction } from '@ngrx/store';

export const increase = createAction('[Counter] Increase');
export const decrease = createAction('[Counter] Decrease');
export const reset = createAction('[Counter] Reset');
