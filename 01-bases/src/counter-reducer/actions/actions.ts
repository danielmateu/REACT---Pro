
export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'handleReset' };
    // | { type: 'decrement' }

export const doReset = (): CounterAction => ({ type: 'handleReset' });

export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: { value }
});