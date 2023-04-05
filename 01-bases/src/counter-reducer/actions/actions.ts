export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    // | { type: 'decrement' }
    | { type: 'handleReset' };