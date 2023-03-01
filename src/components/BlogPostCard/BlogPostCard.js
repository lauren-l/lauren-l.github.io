/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import './BlogPostCard.css'

export function BlogPostCard(props) {
    return (
        <div class="col-md-4">
            <Link to={props.link}>
                <div class="card" style={{ textAlign: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <img src={props.img} />
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </Link>
        </div>
    );
}