import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import axios from "axios";

function AddBook() {
    const [cookies, setCookies] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [id, setId] = useState();
    const book = {}
    const form = React.createRef();

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    const checkForm = (arr) => {
        let check = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i].value === '') {
                check = true;
                alert('Заполните все поля формы.');
                break;
            }
        }
        return check;
    }

    const clearForm = (arr) => {
        form.current.elements.title.value = '';
        form.current.elements.description.value = '';
    }

    const sendBook = (book) => {
        axios.post('http://127.0.0.1:8000/api/books/create', book)
            .then(res => {
                alert(res.data.message);
                clearForm(form.current.elements);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!checkForm(form.current.elements)){
            book.token = cookies['token']['token'];
            book.author_id = id;
            book.title = form.current.elements.title.value;
            book.description = form.current.elements.description.value;
            sendBook(book);
        }
    }

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                } else {
                    setId(res.data.author.id);
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
                    <div className="blc-btn">
                        <button onClick={handleSubmit} className="btn-submit">Отправить</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBook;
