import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function AdminPanel() {
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [infoSite, setInfoSite] = useState({
        books: 0,
        genres: 0,
        authors: 0,
        users: 0
    });

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
            .post(`http://127.0.0.1:8000/api/admin`, cookies["token"])
            .then((res) => {
                setInfoSite(res.data)
            });
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={window.history.back()} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Административная панель</h2>
                    </div>
                    <div className="blc-genres">
                        <ul className="list">
                            <li>
                                <Link className="link">Книги - {infoSite.books}</Link>
                            </li>
                            <li>
                                <Link className="link">Жанры - {infoSite.genres}</Link>
                            </li>
                            <li>
                                <Link className="link">Авторы - {infoSite.authors}</Link>
                            </li>
                            <li>
                                <Link className="link">Пользователи - {infoSite.users}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPanel;
