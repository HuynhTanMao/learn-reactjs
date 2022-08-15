import { useEffect, useRef } from 'react';
import { useState } from 'react';

function randomColor(currentColor) {

    const COLOR_LIST = ['red', 'green', 'blue', 'yellow', 'pink'];
    const indexCurrentColor = COLOR_LIST.indexOf(currentColor);
    let randomIndexColor = indexCurrentColor;

    while (randomIndexColor === indexCurrentColor) {
        randomIndexColor = Math.trunc(Math.random() * COLOR_LIST.length);
    }
    return COLOR_LIST[randomIndexColor];
}

function useMagicColor() {

    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    // Change color every 1 second
    useEffect(() => {

        const colorInterval = setInterval(() => {
            console.log('Change color: ', colorRef.current);
            const newColor = randomColor(colorRef.current);
            colorRef.current = newColor;
            setColor(newColor);

        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }

    }, []);

    return color;
}

export default useMagicColor;