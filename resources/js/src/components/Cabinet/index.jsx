import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

function Cabinet() {
    const [cookies, removeCookie] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [author, setAuthor] = useState({id: 0, books: []});

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if(!res.data.access){
                    setAccess(false);
                } else {
                    setAuthor(res.data.author);
                }
            });
    }, [access]);

    if (checkCookies() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Личный кабинет</h2>
                    </div>
                    <div className="blc-genres">
                        <ul className="list">
                            <li>
                                <Link className="link" to={`../authors/${author.id}`} >Мои книги - {author.books.length}</Link>
                            </li>
                            <li>
                                <Link to={'./add'} className="link">Добавить книгу</Link>
                            </li>
                            <li>
                                <Link className="link">Мои данные</Link>
                            </li>
                            <li>
                                <a
                                    onClick={() => removeCookie("token")}
                                    href="/"
                                    className="link"
                                >
                                    Выйти
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cabinet;
