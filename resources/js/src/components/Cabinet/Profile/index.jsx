import React from "react";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
    const form = React.createRef();
    const [cookies, setCookies] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [authorId, setAuthorId] = useState(
        window.location.search.split("=")[1]
    ); // параметр id из адресса страницы для получения информации об авторе
    const [user, setUser] = useState({
        name: "",
        about: "",
        email: "",
        books: [],
    });

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    const fillForm = () => {
        form.current.elements.name.value = user.name;
        form.current.elements.email.value = user.email;
        form.current.elements.about.value = user.about;
    }

    const getDataUser = () => {
        axios
            .post(
                `http://127.0.0.1:8000/api/author/${authorId}`,
                cookies["token"]
            )
            .then((res) => {
                if (!res.data.access) {
                    alert(res.data.message);
                } else {
                    setUser(res.data);
                    fillForm();
                }
            });
    };

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                } else {
                    getDataUser();
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
                        <h2>Мой профиль</h2>
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
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </p>
                    </div>
                    <div className="data">
                        <p>
                            <textarea
                                name="about"
                                placeholder="О себе"
                                rows="10"
                                required
                            ></textarea>
                        </p>
                    </div>
                    <div className="blc-list">
                        <h3>Мои книги</h3>
                        <ul className="list">
                            {user.books.map((el, index) => (
                                <li key={index}>
                                    <Link className="link">{el.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="blc-btn">
                        <button className="btn-submit">Изменить</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Profile;
