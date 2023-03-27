import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Author() {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get(`${window.location.origin}/api${window.location.pathname}`)
            .then(res => setAuthor(res.data))
    }, []);

    return ( 
        <>
            <h1>Автор</h1>
            <p>{author['name']}</p>
            <h3>Список книг</h3>
            <ul>
                {author['books']?.map(el => (
                    <li key={el.id}><Link to={`../../books/${el.id}`}>{el.title}</Link></li>
                ))}
            </ul>
        </>
     );
}

export default Author;