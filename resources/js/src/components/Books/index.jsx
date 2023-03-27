import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Books() {

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books?page=${currentPage}`)
            .then(res => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setBooks(res.data.data);
            })
    }, [currentPage]);

    const increment = () => {
        if(currentPage !== lastPage) {
            let numPage = currentPage;
            numPage++;
            setCurrentPage(numPage);
        } else {
            setCurrentPage(1);
        };
    }

    const decrement = () => {
        if(currentPage !== 1) {
            let numPage = currentPage;
            numPage--;
            setCurrentPage(numPage);
        };
    }

    return (
        <>
            <h1>Книги</h1>
            <ul>
                {books.map((el, index) => (
                    <li key={index}><Link to={`/books/${el.id}`}>{el.title}</Link></li>
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

export default Books;