import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Main() {

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);

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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books?page=${currentPage}`)
            .then(res => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setBooks(res.data.data);
            })

        axios.get('http://localhost:8000/api/genres')
            .then(res => setGenres(res.data))
    }, [currentPage]);

    return (
        <div className="main">
            <h1>Главная</h1>
            <ul>
                <h2>Книги</h2>
                {books.map((el, index) => (
                    <li key={index}><Link to={`/books/${el.id}`}>{el.title}</Link></li>
                ))}
            </ul>
            <p>
                <button onClick={decrement}>Назад</button>
                <b>{currentPage}</b>
                <button onClick={increment}>Вперед</button>
            </p>
            <ul>
                <h2>Жанры</h2>
                {genres.map((el, index) => (
                    <li key={index}><Link to={`/genres/${el.id}`}>{el.name} - {el.books.length}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default Main;