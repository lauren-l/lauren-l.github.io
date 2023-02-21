import React from 'react';
import { Link } from "react-router-dom";

import "./SubMenu.css"

export function SubMenu() {
    return (
        <span style={{ display: 'inline-block' }}>
            <li class="nav-item" id="nav-sub-menu">
                <Link to="/projects/TinDev" class="nav-link nav-sub-item-style">TinDev</Link>
            </li>
        </span>
    );
}

