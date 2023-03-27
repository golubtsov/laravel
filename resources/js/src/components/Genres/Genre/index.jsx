import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Genre() {

    // const [currentPage, setCurrentPage] = useState(1);
    // const [perPage, setPerPage] = useState(1);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        axios.get(`${window.location.origin}/api${window.location.pathname}`)
            .then(res => {
                // setCurrentPage(res.data.current_page);
                // setPerPage(res.data.per_page)
                setGenre(res.data)
            })
    }, []);

    // const increment = () => {
    //     if(currentPage !== perPage) {
    //         let numPage = currentPage;
    //         numPage++;
    //         setCurrentPage(numPage);
    //     };
    // }

    // const decrement = () => {
    //     if(currentPage !== 1) {
    //         let numPage = currentPage;
    //         numPage--;
    //         setCurrentPage(numPage);
    //     };
    // }

    return ( 
        <>
            <h1>{genre['name']}</h1>
            <ul>
                {genre['books']?.map((el, index) => (
                    <li key={index}><Link to={`../../books/${el.id}`}>{el.title}</Link></li>
                ))}
            </ul>
            {/* <p>
                <button onClick={decrement}>Назад</button>
                <b>{currentPage}</b>
                <button onClick={increment}>Вперед</button>
            </p> */}
        </>
     );
}

export default Genre;