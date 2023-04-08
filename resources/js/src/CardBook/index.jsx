import React from "react";
import { Link } from "react-router-dom";
import "./CardBook.scss";

function CardBook({ data }) {
    let { id, image, author, title } = data;

    if(author === undefined) author = '';
    
    return (
        <div className="card">
            <div className="img-book">
                <img src={`http://127.0.0.1:8000/${image}`} />
            </div>
            <div className="title">
                <Link to={`/books/${id}`}  className="link">{title}</Link>
            </div>
            <div className="title">
                <Link to={`/authors/${author.id}`} className="link">{author.name}</Link>
            </div>
        </div>
    );
}

export default CardBook;
