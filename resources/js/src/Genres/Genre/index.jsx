import React, { useState, useEffect } from "react";
import axios from "axios";
import CardBook from "../../CardBook";

function Genre() {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        axios
            .get(`${window.location.origin}/api${window.location.pathname}`)
            .then((res) => {
                setGenre(res.data);
            });
    }, []);

    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">{genre["name"]}</h2>
                </div>
                <div className="blc-books">
                        {genre["books"]?.map((el, index) => (
                            <CardBook key={index} data={el} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Genre;