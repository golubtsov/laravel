import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../API";
import Pagination from "../Pagination";

function Authors() {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        API
            .get(`/authors?page=${currentPage}`)
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