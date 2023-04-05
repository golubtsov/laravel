import React, { useEffect, useState } from "react";
// import CardBook from "../CardBook";
import axios from "axios";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/books`)
            .then((res) => {
                setBooks(res.data.data);
            });
    }, []);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">Книги</h2>
                </div>
                <div className="blc-books">
                    {books.map((el, index) => (
                        // <CardBook data={el} key={index} />
                        <li key={index}>{index}</li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Books;
