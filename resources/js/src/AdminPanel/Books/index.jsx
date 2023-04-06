import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../scss/style.scss";

function Books() {
    const form = React.createRef();
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listBooks, setlistBooks] = useState([]);
    const [listAuthors, setlistAuthors] = useState([]);
    const [listGenres, setListGenres] = useState([]);
    const newBook = {};

    const checkRole = () => {
        if (cookies["status"] !== undefined) {
            if (cookies["status"]["status"] === "admin") {
                return true;
            }
        }
        return false;
    };

    const handleForm = (event) => {
        event.preventDefault();
        if (checkForm(form.current.elements)) {
            createNewBook();
            sendBook(newBook);
        }
    };

    const checkForm = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].value === "") {
                alert("Заполните все поля.");
                return false;
            }
        }
        return true;
    };

    const createNewBook = () => {
        newBook.token = cookies["token"]["token"];
        newBook.title = form.current.elements.title.value;
        newBook.description = form.current.elements.description.value;
        newBook.author_id = form.current.elements.author_id.value;
        newBook.genres = checkboks(form.current.elements.genre_id);
    };

    const sendBook = (book) => {
        axios
            .post("http://127.0.0.1:8000/api/books/create", book)
            .then((res) => {
                alert(res.data.message);
                location.reload();
            });
    };

    const checkboks = (arr) => {
        let elemsChecked = [];
        for (const el of arr) {
            if(el.checked) {
                elemsChecked = [...elemsChecked, +el.value];
            }
        }
        return elemsChecked;
    }

    const removeBook = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/books/delete/${id}`, {
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

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                }
            });
        axios
            .get("http://localhost:8000/api/list/books")
            .then((res) => setlistBooks(res.data));
        axios
            .get("http://localhost:8000/api/list/authors")
            .then((res) => setlistAuthors(res.data));
        axios
            .get("http://localhost:8000/api/genres")
            .then((res) => setListGenres(res.data));
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Книги</h2>
                    </div>
                    <div className="admin-list">
                        <ul className="list">
                            {listBooks.map((el) => (
                                <div key={el.id} className="block">
                                    <div className="block-name">
                                        <Link className="link">{el.title}</Link>
                                    </div>
                                    <div className="btn-remove">
                                        <button
                                            onClick={() => {
                                                removeBook(el.id);
                                            }}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="blc-add">
                        <form ref={form}>
                            <div className="title">
                                <h2>Добавить книгу</h2>
                            </div>
                            <div className="data">
                                <p>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Название книги"
                                        required
                                    />
                                </p>
                            </div>
                            <div className="data">
                                <p>
                                    <textarea
                                        name="description"
                                        placeholder="Аннотация"
                                        rows="10"
                                        required
                                    ></textarea>
                                </p>
                            </div>
                            <div className="data">
                                <p>
                                    <select name="author_id" id="">
                                        {listAuthors.map((el) => (
                                            <option value={el.id}>
                                                {el.name}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </div>
                            <div className="checkboks">
                                <h3>Выбирите жанр</h3>
                                {listGenres.map((el) => (
                                    <p>
                                        <input
                                            value={el.id}
                                            key={el.id}
                                            type="checkbox"
                                            name="genre_id"
                                        />
                                        {el.name}
                                    </p>
                                ))}
                            </div>
                            <div className="blc-btn">
                                <button
                                    onClick={handleForm}
                                    className="btn-submit"
                                >
                                    Создать
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
