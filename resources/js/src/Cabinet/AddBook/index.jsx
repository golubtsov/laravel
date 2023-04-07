import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import API from "../../API";

function AddBook() {
    const form = React.createRef();
    const [cookies] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [listGenres, setListGenres] = useState([]);
    const [id, setId] = useState();
    const book = {};

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!checkForm(form.current.elements)) {
            book.token = cookies["token"]["token"];
            book.author_id = id;
            book.title = form.current.elements.title.value;
            book.description = form.current.elements.description.value;
            book.genres = checkboks(form.current.elements.genre_id);
            sendBook(book);
        }
    };

    const checkForm = (arr) => {
        let check = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].value === "") {
                check = true;
                alert("Заполните все поля формы.");
                break;
            }
        }
        return check;
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

    const sendBook = (book) => {
        API
            .post("/books/create", book)
            .then((res) => {
                alert(res.data.message);
                location.reload();
            });
    };

    useEffect(() => {
        API
            .post("/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                } else {
                    setId(res.data.author.id);
                }
            });
        API
            .get("/genres")
            .then((res) => setListGenres(res.data));
    }, [access]);

    if (checkCookies() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="blc-form" style={{ display: "block" }}>
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
                                placeholder="Описание книги"
                                rows="10"
                                required
                            ></textarea>
                        </p>
                    </div>
                    <div className="checkboks">
                        <h3>Выбирите жанр</h3>
                        {listGenres.map(el => (
                            <p><input value={el.id} key={el.id} type="checkbox" name="genre_id" />{el.name}</p>
                        ))}
                    </div>
                    <div className="blc-btn">
                        <button onClick={handleSubmit} className="btn-submit">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBook;
