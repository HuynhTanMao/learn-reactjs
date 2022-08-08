import { useState } from "react";
import PropTypes from 'prop-types';
import './style.sass';

Colorbox.propTypes = {
    color: PropTypes.string
};

function Colorbox(){
    const [ color, setColor ] = useState('White');
    return (
        <div className="container">
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
        </div>
    );
};

export default Colorbox;