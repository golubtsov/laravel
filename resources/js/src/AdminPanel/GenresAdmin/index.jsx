import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../scss/style.scss";

function Books() {
    const form = React.createRef();
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listGenres, setListGenres] = useState([]);
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
                alert("Заполните все поля.");
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
        axios
            .post("http://127.0.0.1:8000/api/genres/create", genre)
            .then((res) => {
                alert(res.data.message);
                location.reload();
            });
    };

    const removeGenre = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/genres/delete/${id}`, {
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
                        <h2 className="title">Жанры</h2>
                    </div>
                    <div className="admin-list">
                        <ul className="list">
                            {listGenres.map((el) => (
                                <div key={el.id} className="block">
                                    <div className="block-name">
                                        <Link className="link">
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
            </div>
        );
    }
}

export default Books;