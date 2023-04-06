import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Pagination from "../../Pagination";
import "../scss/style.scss";

function Books() {
    const form = React.createRef();
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listAuthors, setlistAuthors] = useState([]);
    const newAuthor = {};

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
            createNewAuthor();
            sendAuthor(newAuthor);
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

    const createNewAuthor = () => {
        newAuthor.token = cookies["token"]["token"];
        newAuthor.name = form.current.elements.name.value;
        newAuthor.about = form.current.elements.about.value;
    };

    const sendAuthor = (author) => {
        axios
            .post("http://127.0.0.1:8000/api/authors/create", author)
            .then((res) => {
                alert(res.data.message);
                location.reload();
            });
    };

    // const removeBook = (id) => {
    //     axios
    //         .delete(`http://127.0.0.1:8000/api/books/delete/${id}`, {
    //             headers: {
    //                 token: cookies["token"],
    //             },
    //             data: cookies["token"],
    //         })
    //         .then((res) => {
    //             alert(res.data.message);
    //             location.reload();
    //         });
    // };

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                }
            });
        axios
            .get(`http://127.0.0.1:8000/api/authors?page=${currentPage}`)
            .then((res) => {
                setCurrentPage(res.data.current_page);
                setLastPage(res.data.last_page);
                setlistAuthors(res.data.data);
            });
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Авторы</h2>
                    </div>
                    <div className="admin-list">
                        <ul className="list">
                            {listAuthors.map((el) => (
                                <div key={el.id} className="block">
                                    <div className="block-name">
                                        <Link to={`../../authors/${el.id}`} className="link">
                                            {el.name} - {el.books.length}
                                        </Link>
                                    </div>
                                    <div className="btn-remove">
                                        <button>Удалить</button>
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
                                <h2>Добавить автора</h2>
                            </div>
                            <div className="data">
                                <p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="ФИО"
                                        required
                                    />
                                </p>
                            </div>
                            <div className="data">
                                <p>
                                    <textarea
                                        name="about"
                                        placeholder="Немного текста об авторе"
                                        rows="10"
                                        required
                                    ></textarea>
                                </p>
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
