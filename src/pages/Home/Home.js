/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Home.css";
import emailIcon from "../../img/email.png";
import githubIcon from "../../img/github.png";
import linkedinIcon from "../../img/linkedin.png";
import profilePic from "../../img/profile.png";

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <NavBar />
            </header>
            <body>
                <div class="display-middle" id="home-text">
                    <div class="profile-image">
                        <img src={profilePic} />
                    </div>
                    <h1 class="intro-header">👋 Hi, I'm Lauren</h1>
                    <p class="intro-body">I'm a 3rd year computer science + psychology student at the University of Notre Dame,
                        currently on exchange at HKUST for the 2023 Spring semester</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ flexBasis: '24%' }}>
                            <img class="logo" src={linkedinIcon} />
                            <a class="intro-link" href="https://www.linkedin.com/in/lauren-sm-lee/">Lauren Lee</a>
                        </p>
                        <p class="intro-link" style={{ flexBasis: '53%' }}>
                            <img class="logo" src={emailIcon} />
                            laurenlee9284@gmail.com
                        </p>
                        <p style={{ flexBasis: '23%' }}>
                            <img class="logo" src={githubIcon} />
                            <a class="intro-link" href="https://github.com/lauren-l">lauren-l</a>
                        </p>
                    </div>
                </div>
            </body>

        </div>
    );
};