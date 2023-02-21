import { Link } from "react-router-dom";
import './BlogPostCard.css'

export function BlogPostCard(props) {
    return (
        <div class="col-md-4">
            <Link to="/">
                <div class="card">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </Link>
        </div>
    );
}