import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import "./Cabinet.scss";

function Cabinet() {
    const [cookies, removeCookie] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [author, setAuthor] = useState({ id: 0, books: [] });
    const [bookId, setBookId] = useState(0);
    const [displayBtns, setDisplayBtns] = useState("none");

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    const handleInputRadio = (event) => {
        setBookId(event.target.id);
        setDisplayBtns("block");
    };

    const removeBook = () => {
        axios
            .delete(`http://127.0.0.1:8000/api/books/delete/${bookId}`, {
                headers: {
                    token: cookies['token'],
                },
                data: cookies['token']
            })
            .then((res) => {
                alert(res.data.message);
                location.reload();
            });
    };

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
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
                    <div className="text">
                        <Link to={"./add"} className="link">
                            Добавить книгу
                        </Link>
                    </div>
                    <div className="text">
                        <Link className="link">Мой профиль</Link>
                    </div>
                    <div className="text">
                        <h4>Мои книги - {author.books.length}</h4>
                        <div className="blc-genres">
                            <ul className="list">
                                {author.books.map((el, index) => (
                                    <li key={index}>
                                        <input
                                            type="radio"
                                            name="book"
                                            id={el.id}
                                            onChange={handleInputRadio}
                                        />
                                        {el.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="btns" style={{ display: displayBtns }}>
                        <Link
                            to={`./update?id=${bookId}`}
                            className="btn-submit"
                        >
                            Редактировать
                        </Link>
                        <button onClick={removeBook} className="btn-remove">
                            Удалить
                        </button>
                    </div>
                    <div className="text">
                        <a
                            onClick={() => removeCookie("token")}
                            href="/"
                            className="link"
                        >
                            Выйти
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cabinet;
