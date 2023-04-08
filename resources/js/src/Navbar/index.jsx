import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ active, setActiveMenu }) {
    const [cookies] = useCookies("");
    const [displayLoginUp, setDisplayLogin] = useState("");

    const checkCookies = () => {
        if (cookies["token"] === undefined) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        checkCookies() ? setDisplayLogin("block") : setDisplayLogin("none");
    }, [cookies["token"]]);

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link
                            className="link-item"
                            onClick={() => {
                                setActiveMenu(false);
                                window.scrollTo(0, 0);
                            }}
                            to="/"
                        >
                            Главная
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="link-item"
                            onClick={() => {
                                setActiveMenu(false);
                                window.scrollTo(0, 0);
                            }}
                            to="/genres"
                        >
                            Жанры
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="link-item"
                            onClick={() => {
                                setActiveMenu(false);
                                window.scrollTo(0, 0);
                            }}
                            to="/authors"
                        >
                            Авторы
                        </Link>
                    </li>
                    <li
                        style={{ display: displayLoginUp }}
                        className="nav-item"
                    >
                        <Link
                            className="link-item"
                            onClick={() => {
                                setActiveMenu(false);
                                window.scrollTo(0, 0);
                            }}
                            to={"/login"}
                        >
                            Войти
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
