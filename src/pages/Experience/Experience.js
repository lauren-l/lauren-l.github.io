/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import constructionIcon from "../../img/construction.png";
import "./Experience.css";

export default function Experience() {
    return (
        <div className="Experience">
            <header className="Experience-header">
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