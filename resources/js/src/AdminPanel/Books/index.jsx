import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import API from "../../API";
import Pagination from "../../Pagination";
import Popup from "../../Popup";
import clearForm from "../../functions/clearForm";
import "../scss/style.scss";

function Books() {
    const form = React.createRef();
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listBooks, setlistBooks] = useState([]);
    const [listAuthors, setlistAuthors] = useState([]);
    const [listGenres, setListGenres] = useState([]);
    const [displayPopup, setDisplayPopup] = useState("none");
    const [message, setMessage] = useState("");
    const newBook = new FormData();

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
                showPopup();
                setMessage("Заполните все поля.");
                return false;
            }
        }
        return true;
    };

    const createNewBook = () => {
        newBook.append("token", cookies["token"]["token"]);
        newBook.append("title", form.current.elements.title.value);
        newBook.append("description", form.current.elements.description.value);
        newBook.append("image", form.current.elements.image.files[0]);
        newBook.append("author_id", form.current.elements.author_id.value);
        newBook.append("genres", checkboks(form.current.elements.genre_id));
    };

    const sendBook = (book) => {
        API.post("/books/create", book).then((res) => {
            showPopup();
            setMessage(res.data.message);
            clearForm(form.current.elements);
        });
    };

    const checkboks = (arr) => {
        let elemsChecked = [];
        for (const el of arr) {
            if (el.checked) {
                elemsChecked = [...elemsChecked, +el.value];
            }
        }
        return elemsChecked;
    };

    const removeBook = (id) => {
        API.delete(`/books/delete/${id}`, {
            headers: {
                token: cookies["token"],
            },
            data: cookies["token"],
        }).then((res) => {
            showPopup();
            setMessage(res.data.message);
        });
    };

    const showPopup = () => {
        setDisplayPopup('flex');
        setTimeout(() => {
            setDisplayPopup('none');
        }, 2000);
    }


    useEffect(() => {
        API.post("/token", cookies["token"]).then((res) => {
            if (!res.data.access) {
                setAccess(false);
            }
        });
        API.get(`/books?page=${currentPage}`).then((res) => {
            setCurrentPage(res.data.current_page);
            setLastPage(res.data.last_page);
            setlistBooks(res.data.data);
        });
        API.get("/list/authors").then((res) => setlistAuthors(res.data));
        API.get("/genres").then((res) => setListGenres(res.data));
    }, [currentPage, displayPopup]);

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
                                        <Link
                                            to={`../../books/${el.id}`}
                                            className="link"
                                        >
                                            {el.title}
                                        </Link>
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
                    <Pagination
                        currentPage={currentPage}
                        lastPage={lastPage}
                        setCurrentPage={setCurrentPage}
                    />
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
                                    <input type="file" name="image" />
                                </p>
                            </div>
                            <div className="data">
                                <p>Выбирите автора</p>
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
                <Popup display={displayPopup} message={message} />
            </div>
        );
    }
}

export default Books;
