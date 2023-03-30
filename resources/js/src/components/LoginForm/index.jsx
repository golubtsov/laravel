import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function LoginForm() {
    const form = React.createRef();
    const [cookies, setCookie] = useCookies(['name']);

    const handleForm = (event) => {
        event.preventDefault();
        let user = {
            email: form.current.elements.email.value,
            password: form.current.elements.password.value,
        };
        axios.post("http://localhost:8000/api/login", user)
            .then((res) => {
                if (res.data.status) {
                    setCookie('name', {token: res.data.token});
                    alert(checkResponse(res.data.message));
                } else {
                    alert(checkResponse(res.data.message));
                }
            }
        );
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

    const cookie = () => {
        axios.post("http://localhost:8000/api/test", cookies.name)
            .then((res) => {
                console.log(res.data);
            }
        );
    }

    return (
        <>
            <form method="POST" ref={form}>
                <p>Email</p>
                <p>
                    <input
                        type="text"
                        name="email"
                        defaultValue={"nik@gmail.com"}
                    />
                </p>
                <p>Пароль</p>
                <p>
                    <input type="text" name="password" defaultValue={"12345678"} />
                </p>
                <button onClick={handleForm} type="submit">
                    Отправить
                </button>
            </form>

            <button onClick={cookie}>Cookie</button>
        </>
    );
}

export default LoginForm;
