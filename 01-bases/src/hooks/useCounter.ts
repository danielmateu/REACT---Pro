import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
const MAXIMUN_COUNT = 10;

export const useCounter = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    useEffect(() => {
        // console.log('UseEffect');
        if (counter < 10) return

        console.log('%cSe llegó a 10', 'color: green; background-color: black; font-size: 20px; font-weight: bold;');

        const timeline = gsap.timeline();

        timeline
            .to(counterElement.current, { duration: 1, color: 'red', y: -10, ease: 'ease.out' })
            .to(counterElement.current, { duration: 1, color: 'red', y: 0, ease: 'bounce.out' }).repeat(1);
    }, [counter])

    return {
        counter,
        counterElement,
        handleClick
    }
}
