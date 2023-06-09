import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import Popup from "../Popup";

function Cabinet() {
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [author, setAuthor] = useState({ id: 0, books: [] });
    const [bookId, setBookId] = useState(0);
    const [displayBtns, setDisplayBtns] = useState("none");
    const [displayPopup, setDisplayPopup] = useState("none");
    const [message, setMessage] = useState("");

    const checkCookies = () => {
        if (cookies["token"] === undefined || cookies["status"] === undefined) {
            return true;
        }
        return false;
    };

    const removeCookies = () => {
        document.cookie = "token=; Max-Age=-1;";
        document.cookie = "status=; Max-Age=-1;";
    };

    const handleInputRadio = (event) => {
        setBookId(event.target.id);
        setDisplayBtns("block");
    };

    const removeBook = () => {
        axios
            .delete(`http://127.0.0.1:8000/api/books/delete/${bookId}`, {
                headers: {
                    token: cookies["token"],
                },
                data: cookies["token"],
            })
            .then((res) => {
                alert(res.data.message);
                location.reload();
            });
    };

    const handleRemoveProfile = () => {
        axios
            .delete(`http://127.0.0.1:8000/api/author/delete/${author.id}`, {
                headers: {
                    token: cookies["token"],
                },
                data: cookies["token"],
            })
            .then((res) => {
                removeCookies();
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
                        <Link to={`./profile?id=${author.id}`} className="link">
                            Мой профиль
                        </Link>
                    </div>
                    <div className="text">
                        <h4>Мои книги - {author.books.length}</h4>
                        <div className="blc-list">
                            <ul className="list">
                                {author.books.map((el, index) => (
                                    <li key={index}>
                                        <input
                                            type="radio"
                                            name="book"
                                            id={el.id}
                                            onChange={handleInputRadio}
                                        />
                                        <Link
                                            to={`../books/${el.id}`}
                                            className="link"
                                        >
                                            {el.title}
                                        </Link>
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
                            onClick={() => removeCookies()}
                            href="/"
                            className="link"
                        >
                            Выйти
                        </a>
                    </div>
                    <div className="text">
                        <p
                            onClick={handleRemoveProfile}
                            href="/"
                            className="link remove"
                        >
                            Удалить аккаунт
                        </p>
                    </div>
                </div>
                <Popup display={displayPopup} message={message}/>
            </div>
        );
    }
}

export default Cabinet;
