import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardBook from "../../CardBook";
import "../../../../../scss/app.scss";

function Genre() {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [perPage, setPerPage] = useState(1);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        axios
            .get(`${window.location.origin}/api${window.location.pathname}`)
            .then((res) => {
                // setCurrentPage(res.data.current_page);
                // setPerPage(res.data.per_page)
                setGenre(res.data);
            });
    }, []);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">{genre["name"]}</h2>
                </div>
                <div className="blc-books">
                        {genre["books"]?.map((el, index) => (
                            <CardBook key={index} data={el} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Genre;

{
    /* <h1>{genre["name"]}</h1>
            <ul>
                {genre["books"]?.map((el, index) => (
                    <li key={index}>
                        <Link to={`../../books/${el.id}`}>{el.title}</Link>
                    </li>
                ))}
            </ul> */
}
