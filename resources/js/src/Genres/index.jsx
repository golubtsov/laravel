import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import axios from "axios";

function Genres() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/genres_paginate?page=${currentPage}`
            )
            .then((res) => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setGenres(res.data.data);
            });
    }, [currentPage]);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">Жанры</h2>
                </div>
                <div className="blc-genres">
                    <ul className="list">
                        {genres.map((el, index) => (
                            <li key={index}>
                                <Link className="link" to={`/genres/${el.id}`}>
                                    {el.name} - {el.books.length}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Genres;