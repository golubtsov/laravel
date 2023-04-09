import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Pagination from "../../Pagination";
import API from "../../API";
import Popup from "../../Popup";
import clearForm from "../../functions/clearForm";
import "../scss/style.scss";

function Books() {
    const form = React.createRef();
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listGenres, setListGenres] = useState([]);
    const [displayPopup, setDisplayPopup] = useState("none");
    const [message, setMessage] = useState("");
    const newGenre = {};

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
            createNewGenre();
            sendGenre(newGenre);
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

    const createNewGenre = () => {
        newGenre.token = cookies["token"]["token"];
        newGenre.name = form.current.elements.name.value;
    };

    const sendGenre = (genre) => {
        API.post("/genres/create", genre).then((res) => {
            showPopup();
            setMessage(res.data.message);
            clearForm(form.current.elements);
        });
    };

    const removeGenre = (id) => {
        API.delete(`/genres/delete/${id}`, {
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
        setDisplayPopup("flex");
        setTimeout(() => {
            setDisplayPopup("none");
        }, 2000);
    };

    useEffect(() => {
        API.post("/token", cookies["token"]).then((res) => {
            if (!res.data.access) {
                setAccess(false);
            }
        });
        API.get(`/genres_paginate?page=${currentPage}`).then((res) => {
            setCurrentPage(res.data.current_page);
            setLastPage(res.data.last_page);
            setListGenres(res.data.data);
        });
    }, [access, currentPage, displayPopup]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Жанры</h2>
                    </div>
                    <div className="admin-list">
                        <ul className="list">
                            {listGenres.map((el) => (
                                <div key={el.id} className="block">
                                    <div className="block-name">
                                        <Link
                                            to={`../../genres/${el.id}`}
                                            className="link"
                                        >
                                            {el.name} - {el.books.length}
                                        </Link>
                                    </div>
                                    <div className="btn-remove">
                                        <button
                                            onClick={() => {
                                                removeGenre(el.id);
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
                                <h2>Добавить жанр</h2>
                            </div>
                            <div className="data">
                                <p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Название"
                                        required
                                    />
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
                <Popup display={displayPopup} message={message}/>
            </div>
        );
    }
}

export default Books;
