import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../Pagination";
import "../../../../scss/app.scss";

function Authors() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/authors?page=${currentPage}`)
            .then((res) => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setAuthors(res.data.data);
            });
    }, [currentPage]);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">Авторы</h2>
                </div>
                <div className="blc-authors">
                    <ul className="list">
                        {authors?.map((el, index) => (
                            <li key={index}>
                                <Link className="link" to={`/authors/${el.id}`}>
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

export default Authors;