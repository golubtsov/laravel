import React, { useState, useEffect } from "react";
import axios from "axios";
import CardBook from "../../CardBook";

function Author() {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios
            .get(`${window.location.origin}/api${window.location.pathname}`)
            .then((res) => setAuthor(res.data));
    }, []);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">{author["name"]}</h2>
                </div>
                <div className="text">
                    <h4>Биография</h4>
                </div>
                <div className="text">
                    <p>{author["about"]}</p>
                </div>
                <div className="text">
                    <h4>Список книг</h4>
                </div>
                <div className="blc-books">
                    {author["books"]?.map((el, index) => (
                        <CardBook data={el} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Author;