import React from "react";
import { NavLink, useParams, useMatch } from "react-router-dom";
import BetterClock from "../../features/BetterClock";
import Clock from "../../features/Clock";
import MagicBox from "../../features/MagicBox";
import './style.sass';

function Tool() {
    let { toolSlug } = useParams();
    // let match = useMatch();
    // console.log({ match });
    return (
        <div className="tool-wrap">
            <div className="sidebar">
                <h2>List Tools</h2>
                <ul>
                    <li><NavLink to="../clock">Clock</NavLink></li>
                    <li><NavLink to="../magic-color">Magic box</NavLink></li>
                </ul>
            </div>
            <div className="main">
                {
                    toolSlug === 'clock' &&
                    <div className="tool-clock-wrap">
                        <h1>Tool: Clock</h1>
                        <div className="clock-item simple-clock-wrap">
                            <h2>Simple Clock</h2>
                            <Clock />
                        </div>
                        <div className="clock-item better-clock-wrap">
                            <h2>Better Clock</h2>
                            <BetterClock />
                        </div>
                    </div>
                }
                {toolSlug === 'magic-color' && <MagicBox />}
            </div>
        </div >
    );
}

export default Tool;
