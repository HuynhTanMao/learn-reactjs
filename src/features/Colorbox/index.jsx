import React, { useState } from 'react';
import './style.sass';

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        let defaultColor = 'deeppink';
        if (localStorage.getItem('defaultColor')) {
            defaultColor = localStorage.getItem('defaultColor');
        }
        return defaultColor;
    });

    const handleChangeBgOnClick = () => {
        const argsColor = ['deeppink', 'green', 'yellow', 'black', 'blue'];
        let randomColor = Math.floor(Math.random() * argsColor.length); // random 0 - argsColor.length;
        localStorage.setItem('defaultColor', argsColor[randomColor]);
        setColor(argsColor[randomColor]);
    }

    return (
        <div className='container'>
            <div className='color-box' style={{ backgroundColor: color }} onClick={handleChangeBgOnClick}>
            </div >
        </div>
    );
}

export default ColorBox;