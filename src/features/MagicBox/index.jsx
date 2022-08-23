import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './style.sass';

function MagicBox() {

    const color = useMagicColor();
    return (
        <div className='container'>
            <h1>React hook - Use custom hook Magic color: useMagicColor</h1>
            <div
                className='magic-box'
                style={{ backgroundColor: color }}
            >
            </div>
        </div>
    );
}

export default MagicBox;