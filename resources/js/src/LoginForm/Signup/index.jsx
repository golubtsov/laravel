import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import Popup from "../../Popup";
import clearForm from "../../functions/clearForm";

function Sidnup() {
    const form = React.createRef();
    const [display, setDisplay] = useState("none");
    const [displayPopup, setDisplayPopup] = useState("none");
    const [message, setMessage] = useState("");
    let newUser = {};

    const handleSubmit = (event) => {
        event.preventDefault();
        createInfoUser();
        if (checkForm(form.current.elements)) {
            createInfoUser();
            sendInfo(newUser);
        }
    };

    const createInfoUser = () => {
        newUser.name = form.current.elements.name.value;
        newUser.email = form.current.elements.email.value;
        newUser.password = form.current.elements.password.value;
        newUser.password_confirmation =
            form.current.elements.password_confirmation.value;
    };

    const checkResponse = (msg) => {
        if (msg.email === undefined && msg.password === undefined) {
            return msg;
        } else if (msg.email !== undefined && msg.password === undefined) {
            return msg.email;
        } else {
            return msg.password;
        }
    };

    const checkForm = (array) => {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].value === "") {
                showPopup();
                setMessage("Заполните все поля формы.");
                return;
            }
        }
        return true;
    };

    const sendInfo = (user) => {
        API.post("/register", user).then((res) => {
            showPopup();
            setMessage(checkResponse(res.data.message));
            if (res.data.status) {
                setDisplay("block");
            }
        });
    };

    const showPopup = () => {
        setDisplayPopup("flex");
        setTimeout(() => {
            setDisplayPopup("none");
        }, 2000);
    };

    useEffect(() => {}, [display]);

    return (
        <div className="blc-form">
            <form ref={form}>
                <div className="title">
                    <h2>Зарегистрироваться</h2>
                </div>
                <div className="data">
                    <p>
                        <input
                            type="text"
                            name="name"
                            placeholder="ФИО *"
                            required
                        />
                    </p>
                </div>
                <div className="data">
                    <p>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email *"
                            required
                        />
                    </p>
                </div>
                <div className="data">
                    <p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль *"
                            required
                        />
                    </p>
                </div>
                <div className="data">
                    <p>
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Повторите пароль *"
                            required
                        />
                    </p>
                </div>
                <div className="blc-btn">
                    <button onClick={handleSubmit} className="btn-submit">
                        Отправить
                    </button>
                </div>
                <div style={{ display: display }} className="data">
                    <Link className="link" to="../login">
                        Войти
                    </Link>
                </div>
            </form>
            <Popup display={displayPopup} message={message} />
        </div>
    );
}

export default Sidnup;
