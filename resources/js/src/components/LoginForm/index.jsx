import React from "react";
import axios from "axios";
import Cookie from '../../cookies/Cookie';

function LoginForm() {
    const form = React.createRef();

    const handleForm = (event) => {
        event.preventDefault();
        let user = {
            email: form.current.elements.email.value,
            password: form.current.elements.password.value,
        };
        axios
            .post("http://localhost:8000/api/login", user)
            .then((res) => {
                console.log(res.data);
                let cookie = new Cookie(
                    res.data.token,
                    res.data.user_id,
                    res.data.role,
                );
            });
    };

    return (
        <>
            <form method="POST" ref={form}>
                <p>Email</p>
                <p>
                    <input
                        type="text"
                        name="email"
                        defaultValue={"user@gmail.com"}
                    />
                </p>
                <p>Пароль</p>
                <p>
                    <input type="text" name="password" defaultValue={"1234"} />
                </p>
                <button onClick={handleForm} type="submit">
                    Отправить
                </button>
            </form>
        </>
    );
}

export default LoginForm;
