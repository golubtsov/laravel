import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import axios from "axios";

function UpdateBook() {
    const form = React.createRef();
    const [cookies, setCookies] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [bookId, setBookId] = useState(window.location.search.split("=")[1]); // параметр id из адресса страницы для получения информации о книге
    const [authorId, setAuthorId] = useState(0);
    const updateBook = {};

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
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

    const clearForm = () => {
        form.current.elements.title.value = "";
        form.current.elements.description.value = "";
    };

    const sendBook = (book) => {
        axios
            .put("http://127.0.0.1:8000/api/books/update", book)
            .then((res) => {
                alert(res.data.message);
            });
    };

    const getBook = () => {
        axios.get(`http://127.0.0.1:8000/api/books/${bookId}`).then((res) => {
            form.current.elements.title.value = res.data.title;
            form.current.elements.description.value = res.data.description;
            setAuthorId(res.data.author_id);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!checkForm(form.current.elements)) {
            updateBook.token = cookies["token"]["token"];
            updateBook.id = bookId;
            updateBook.author_id = authorId;
            updateBook.title = form.current.elements.title.value;
            updateBook.description = form.current.elements.description.value;
            sendBook(updateBook);
        }
    };

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                } else {
                    getBook();
                }
            });
    }, [access]);

    if (checkCookies() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="blc-form" style={{ display: "block" }}>
                <form ref={form}>
                    <div className="title">
                        <h2>Редактировать книгу</h2>
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

export default UpdateBook;
