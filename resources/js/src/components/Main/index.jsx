import React, { useEffect, useState } from "react";
import axios from "axios";
import CardBook from "../CardBook";
import Pagination from "../Pagination";

function Main() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/books?page=${currentPage}`)
            .then((res) => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setBooks(res.data.data);
            })
    }, [currentPage]);

    return (
        <div className="main">
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
            <Pagination 
                currentPage={currentPage}
                lastPage={lastPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Main;
