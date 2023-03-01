import "./NavBar.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { SubMenu } from "../SubMenu/SubMenu"

export function NavBar() {
    const [elementVisible, setElementVisible] = useState(false);
    return (
        <div id="intro" class="bg-image shadow-2-strong">
            <nav class="navbar navbar-expand-lg navbar-light d-none d-lg-block">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link nav-item-style">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/experience" class="nav-link nav-item-style">Experience</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/hci-portfolio" class="nav-link nav-item-style">HCI Portfolio</Link>
                            </li>
                            <span onMouseEnter={() => setElementVisible(true)}
                                onMouseLeave={() => setElementVisible(false)}>
                                <li class="nav-item" style={{ display: 'inline-block' }}>
                                    <Link to="/projects" class="nav-link nav-item-style">Projects</Link>
                                </li>
                                {
                                    elementVisible ?
                                        <SubMenu /> : null
                                }
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}