import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../scss/style.scss";

function Books() {
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listUsers, setListUsers] = useState([]);

    const checkRole = () => {
        if (cookies["status"] !== undefined) {
            if (cookies["status"]["status"] === "admin") {
                return true;
            }
        }
        return false;
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
            .post("http://localhost:8000/api/admin/users", cookies["token"])
            .then((res) => setListUsers(res.data));
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Пользователи</h2>
                    </div>
                    <div className="admin-list">
                        <ol className="list">
                            {listUsers.map((el) => (
                                <li>
                                    <div className="user">
                                        <div className="name">
                                            <p>{el.name}</p>
                                        </div>
                                        <div className="email">
                                            <p>{el.email}</p>
                                        </div>
                                        <div className="role">
                                            <select name="" id="">
                                                <option
                                                    selected
                                                    value={el.role}
                                                >
                                                    {el.role}
                                                </option>
                                                <option
                                                    value={
                                                        el.role === "admin"
                                                            ? "admin"
                                                            : "author"
                                                    }
                                                >
                                                    {el.role === "admin"
                                                        ? "author"
                                                        : "admin"}
                                                </option>
                                            </select>
                                        </div>
                                        <div className="save">
                                            <button>Изменить</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
