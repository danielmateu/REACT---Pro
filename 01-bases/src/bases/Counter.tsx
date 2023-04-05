import { useState } from "react";

// set types for props
interface Props {
    initialValue?: number;
    prevValue: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter(prevValue => prevValue + 1);
    }

    return (
        <>
            <h1>Counter App: {counter}</h1>

            <button
                onClick={handleIncrement}
            >+1</button>
        </>
    )
}
