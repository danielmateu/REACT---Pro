
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";




export const Counterhook = () => {

    const { counter, handleClick, elementToAnimate } = useCounter();

    return (
        <>
            <h1>Counter Hook:</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>

            <button onClick={handleClick}>+1</button>
        </>
    )
}
