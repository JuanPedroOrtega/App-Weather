import { createAction } from '@ngrx/store';

const actionNameCreator = (component: string) => (action: string) => {
    return `[${component}] ${action}`;
}

const getActionName = actionNameCreator('Counter Component');

export const increase = createAction(getActionName('Increase'));
export const decrease = createAction(getActionName('Decrease'));
export const reset = createAction(getActionName('Reset'));
