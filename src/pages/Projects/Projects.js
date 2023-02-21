/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import constructionIcon from "../../img/construction.png";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="Projects">
            <header className="Projects-header">
                <NavBar />
            </header>
            <body>
                <img class="image center" src={constructionIcon} />
                <div display="flex">
                    <h3 style={{ fontFamily: "Lora", textAlign: "center" }}>Page Under Construction</h3>
                </div>
            </body>

        </div>
    );
};