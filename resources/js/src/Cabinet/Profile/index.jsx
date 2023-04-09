import React from "react";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import API from "../../API";
import Popup from "../../Popup";
import clearForm from "../../functions/clearForm";

function Profile() {
    const form = React.createRef();
    const [cookies] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [authorId] = useState(window.location.search.split("=")[1]); // параметр id из адресса страницы для получения информации об авторе
    const [user, setUser] = useState({
        name: "",
        about: "",
        email: "",
        books: [],
    });
    const [displayPopup, setDisplayPopup] = useState("none");
    const [message, setMessage] = useState("");

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    const getDataUser = () => {
        API.post(`/author/${authorId}`, cookies["token"]).then((res) => {
            if (!res.data.access) {
                showPopup();
                setMessage(res.data.message);
            } else {
                setUser(res.data);
            }
        });
    };

    const collectData = () => {
        delete user.access;
        user.id = authorId;
        user.name = form.current.elements.name.value;
        user.about = form.current.elements.about.value;
        user.token = cookies["token"]["token"];
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        collectData();
        API.put(`/author/update`, user).then((res) => {
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
            } else {
                getDataUser();
            }
        });
    }, [access. displayPopup]);

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
                                defaultValue={user.name}
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
                                defaultValue={user.about}
                                required
                            ></textarea>
                        </p>
                    </div>
                    <div className="blc-list">
                        <h3>Мои книги</h3>
                        <ul className="list">
                            {user.books.map((el, index) => (
                                <li key={index}>
                                    <Link
                                        to={`../../books/${el.id}`}
                                        className="link"
                                    >
                                        {el.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="blc-btn">
                        <button onClick={handleSubmit} className="btn-submit">
                            Изменить
                        </button>
                    </div>
                </form>
                <Popup display={displayPopup} message={message}/>
            </div>
        );
    }
}

export default Profile;
