import React from "react";
import axios from "axios";

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
            .then((res) => console.log(res.data));
    };

    return (
        <>
            <form
                method="POST"
                action="http://localhost:8000/api/login"
                ref={form}
            >
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
