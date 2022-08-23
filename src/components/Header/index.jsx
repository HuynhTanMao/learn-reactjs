import React from 'react';
import { NavLink } from "react-router-dom";
import './style.sass';

function Header() {
    return (
        <header>
            <strong>Header</strong>
            < nav className='header-nav' >
                <NavLink to="/">Home</NavLink> | {" "}
                <NavLink to="/todos" > Todos</NavLink > | {" "}
                <NavLink to="/news" >Post List</NavLink > | {" "}
                <NavLink to="/tools">Tools</NavLink>
            </nav >
        </header>
    );
}

export default Header;