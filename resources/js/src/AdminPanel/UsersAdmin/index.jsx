import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
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
            .get("http://localhost:8000/api/genres")
            .then((res) => setListUsers(res.data));
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Жанры</h2>
                    </div>
                    <div className="admin-list">
                        <ul className="list">
                            {listUsers.map((el) => (
                                <div key={el.id} className="block">
                                    <div className="block-name">
                                        <Link className="link">{el.name} - {el.books.length}</Link>
                                    </div>
                                    <div className="btn-remove">
                                        <button>Удалить</button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="blc-add">
                        <form>
                            <div className="title">
                                <h2>Добавить жанр</h2>
                            </div>
                            <div className="data">
                                <p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Название"
                                        required
                                    />
                                </p>
                            </div>
                            <div className="blc-btn">
                                <button
                                    // onClick={handleForm}
                                    className="btn-submit"
                                >
                                    Создать
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
