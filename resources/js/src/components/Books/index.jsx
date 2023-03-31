import React, { useEffect, useState } from "react";
import CardBook from "../CardBook";
import "../Main/Main.scss";
import axios from "axios";

function Books() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/books?page=${currentPage}`)
            .then((res) => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setBooks(res.data.data);
            });
    }, []);

    return (
        <div className="blc-content">
            <div className="blc-title">
                <h2 className="title">Книги</h2>
            </div>
            <div className="blc-books">
                {books.map((el, index) => (
                    <CardBook data={el} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Books;
