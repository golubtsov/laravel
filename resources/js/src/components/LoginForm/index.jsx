import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.scss";

function LoginForm() {
    const form = React.createRef();
    const [cookies, setCookie] = useCookies(["token"]);
    const [token, setToken] = useState(false);

    const handleForm = (event) => {
        event.preventDefault();
        let user = {
            email: form.current.elements.email.value,
            password: form.current.elements.password.value,
        };
        axios.post("http://localhost:8000/api/login", user).then((res) => {
            if (res.data.status) {
                setCookie("token", { token: res.data.token });
                alert(checkResponse(res.data.message));
                setToken(true);
            } else {
                alert(checkResponse(res.data.message));
            }
        });
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

    useEffect(() => {}, [token]);

    return (
        <div className="blc-form">
            <form ref={form}>
                <div className="title">
                    <h2>Авторизация</h2>
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
                <div className="blc-btn">
                    <div onClick={handleForm} className="btn-submit">
                        Отправить
                    </div>
                </div>
                <div className="data">
                    <Link className="link" to="/signup">
                        Не зарегистрированы?
                    </Link>
                </div>
            </form>
            {(token) ? <Navigate to={'../cabinet'} /> : false}
        </div>
    );
}

export default LoginForm;
