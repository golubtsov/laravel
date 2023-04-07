import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../API";

function Book() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        API
            .get(`${window.location.pathname}`)
            .then((res) => setBook(res.data));
    }, []);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">{book["title"]}</h2>
                </div>
                <div className="text">
                    <Link className="link" to={`../../authors/${book["author_id"]}`}>
                        <b>Автор:</b> {book["author_name"]}
                    </Link>
                </div>
                <div className="text">
                    <h3>Аннотация</h3>
                </div>
                <div className="text">
                    <p>{book["description"]}</p>
                </div>
            </div>
        </div>
    );
}

export default Book;

{
    /* <h1>{book["title"]}</h1>
            <p>
                <Link to={`../../authors/${book["author_id"]}`}>
                    {book["author_name"]}
                </Link>
            </p>
            <p>
                <b>Аннотация</b>
            </p>
            <p>{book["description"]}</p> */
}
