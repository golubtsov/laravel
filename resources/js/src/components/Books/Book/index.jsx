import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Book() {

    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get(`${window.location.origin}/api${window.location.pathname}`)
            .then(res => setBook(res.data))
    }, []);

    return ( 
        <>
            <h1>{book['title']}</h1>
            <p><Link to={`../../authors/${book['author_id']}`}>{book['author_name']}</Link></p>
            <p><b>Аннотация</b></p>
            <p>{book['description']}</p>
        </>
     );
}

export default Book;