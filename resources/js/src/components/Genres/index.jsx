import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

    const increment = () => {
        if (currentPage !== lastPage) {
            let numPage = currentPage;
            numPage++;
            setCurrentPage(numPage);
        } else {
            setCurrentPage(1);
        }
    };

    const decrement = () => {
        if (currentPage !== 1) {
            let numPage = currentPage;
            numPage--;
            setCurrentPage(numPage);
        } else {
            setLastPage(lastPage);
        }
    };

    return (
        <>
            <h1>Жанры</h1>
            <ul>
                {genres.map((el, index) => (
                    <li key={index}>
                        <Link to={`/genres/${el.id}`}>
                            {el.name} - {el.books.length}
                        </Link>
                    </li>
                ))}
            </ul>
            <p>
                <button onClick={decrement}>Назад</button>
                <b>{currentPage}</b>
                <button onClick={increment}>Вперед</button>
            </p>
        </>
    );
}

export default Genres;
