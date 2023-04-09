import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import API from "../API";
import Popup from "../Popup";
import clearForm from "../functions/clearForm";

function LoginForm() {
    const form = React.createRef();
    const [cookies, setCookie] = useCookies(["token"]);
    const [token, setToken] = useState(false);
    const [displayPopup, setDisplayPopup] = useState("none");
    const [message, setMessage] = useState("");

    const handleForm = (event) => {
        event.preventDefault();
        let user = {
            email: form.current.elements.email.value,
            password: form.current.elements.password.value,
        };
        API.post("/login", user).then((res) => {
            if (res.data.status) {
                setCookie("token", { token: res.data.token });
                setCookie("status", { status: res.data.status });
                setToken(true);
                if(res.data.status === 'admin'){
                    window.location = window.location.origin + "/admin";
                } else {
                    window.location = window.location.origin + "/cabinet";
                }
            } else {
                showPopup();
                setMessage(res.data.message);
            }
        });
    };

    // const checkResponse = (msg) => {
    //     if (msg.email === undefined && msg.password === undefined) {
    //         return msg;
    //     } else if (msg.email !== undefined && msg.password === undefined) {
    //         return msg.email;
    //     } else {
    //         return msg.password;
    //     }
    // };

    const showPopup = () => {
        setDisplayPopup("flex");
        setTimeout(() => {
            setDisplayPopup("none");
        }, 2000);
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
                    <button onClick={handleForm} className="btn-submit">
                        Отправить
                    </button>
                </div>
                <div className="data">
                    <Link className="link" to="/signup">
                        Не зарегистрированы?
                    </Link>
                </div>
            </form>
            <Popup display={displayPopup} message={message} />
        </div>
    );
}

export default LoginForm;
