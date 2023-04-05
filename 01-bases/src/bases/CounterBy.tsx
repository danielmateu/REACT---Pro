import { useState } from "react";

// set types for props
interface Props {
    initialValue?: number;
    prevValue?: number;
}

// set types for state
interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    // const { counter, clicks } = counterState;

    const handleIncrement = (value: number) => {
        setCounterState(({ clicks, counter }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

    return (
        <>
            <h1>Counter App by: {counter}</h1>
            <h2>Clicks: {clicks}</h2>

            <button onClick={() => handleIncrement(1)}>+1</button>
            <button onClick={() => handleIncrement(5)}>+5</button>
        </>
    )
}
