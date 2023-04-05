import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../scss/style.scss";

function Books() {
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listBooks, setlistBooks] = useState([]);

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
            .get("http://localhost:8000/api/list/books")
            .then((res) => setlistBooks(res.data));
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Книги</h2>
                    </div>
                    <div className="admin-list">
                        <ul className="list">
                            {listBooks.map((el) => (
                                <div key={el.id} className="block">
                                    <div className="block-name">
                                        <Link className="link">{el.title}</Link>
                                    </div>
                                    <div className="btn-remove">
                                        <button>Удалить</button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
