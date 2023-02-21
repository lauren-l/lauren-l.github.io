/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./HciBlog.css";
import { BlogPostCard } from "../../components/BlogPostCard/BlogPostCard";

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
                        <BlogPostCard title="Post 1" description="First Blog Post" />
                    </div>
                </div>
            </body>

        </div>
    );
};