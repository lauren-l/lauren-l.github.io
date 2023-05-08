/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./HciBlog.css";
import { BlogPostCard } from "../../components/BlogPostCard/BlogPostCard";
import p1Cover from "../../img/proj1/cover.png";
import p2Cover from "../../img/proj2/p2Cover.png";
import p3Cover from "../../img/proj3/p3Cover.png";



export default function HciBlog() {
    return (
        <div className="HCI-Blog">
            <header className="HCI-Blog-header">
                <NavBar />
            </header>
            <body>
                <div style={{ marginTop: '3rem' }}></div>
                <div class="container">
                    <div class="row">
                        <BlogPostCard title="Project 1" description="Sixth Sense" img={p1Cover} link={"/hci-portfolio/project-1"} />
                        <BlogPostCard title="Project 2" description="Sixth Sense" img={p2Cover} link={"/hci-portfolio/project-2"} />
                        <BlogPostCard title="Project 2" description="Sixth Sense" img={p3Cover} link={"/hci-portfolio/project-3"} />
                    </div>
                </div>
            </body>

        </div>
    );
};