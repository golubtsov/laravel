import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Sidnup() {
    const form = React.createRef();
    const [display, setDisplay] = useState('none');
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
                alert("Заполните все поля формы.");
                return;
            }
        }
        return true;
    };

    const sendInfo = (user) => {
        axios.post("http://localhost:8000/api/register", user).then((res) => {
            alert(checkResponse(res.data.message));
            clearForm;
            if (res.data.status) {
                setDisplay("block");
            }
        });
    };

    const clearForm = () => {
        for (let i = 0; i < array.length; i++) {
            array[i].value = "";
        }
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
                    <Link
                        className="link"
                        to="../login"
                    >
                        Войти
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Sidnup;
