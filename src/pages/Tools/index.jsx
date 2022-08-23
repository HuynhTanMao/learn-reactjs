import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './style.sass';

function Tools() {

    const listTool = [
        { id: 1, title: 'Clock', slug: 'clock', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { id: 2, title: 'Magic box', slug: 'magic-color', image: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    ];

    return (
        <div className="tools-grid">
            {listTool.map((tool) => (
                <div key={tool.id} className="tool-item">
                    <Link to={tool.slug} className="tool-item-inner">
                        <img src={tool.image} alt={tool.alt} />
                        <h3>{tool.title}</h3>
                    </Link>
                </div>
            ))}
            <Outlet />
        </div >
    );
}

export default Tools;