import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";


const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleCLick = () => {
        // if MAXIMUN_COUNT => console.log('Se llegó a 10') and stop
        // if(counter >= MAXIMUN_COUNT) return console.log('Se llegó a 10');
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    useLayoutEffect(() => {
        // console.log('UseEffect');
        if (counter < 10) return

        console.log('%cSe llegó a 10', 'color: green; background-color: black; font-size: 20px; font-weight: bold;');

        const timeline = gsap.timeline({});

        timeline
            .to(counterElement.current, { duration: 1, color: 'red', y: -10, ease: 'ease.out' })
            .to(counterElement.current, { duration: 1, color: 'red', y: 0, ease: 'bounce.out' }).repeat(1);
    }, [counter])



    return (
        <>
            <h1>Counter Effect:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleCLick}>+1</button>
        </>
    )
}
