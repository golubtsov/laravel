import React from "react";
import { Link } from "react-router-dom";
import iconBook from "./images/book-icon.png";
import "./CardBook.scss";

function CardBook({ data }) {
    let { id, author, title } = data;
    return (
        <div className="card">
            <div className="img-book">
                <img src={iconBook} />
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
