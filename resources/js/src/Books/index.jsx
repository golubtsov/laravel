import React, { useEffect, useState } from "react";
import API from "../API";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.get(`/books`).then((res) => {
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
                        <li key={index}>{index}</li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Books;
