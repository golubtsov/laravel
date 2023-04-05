import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ active, setActiveMenu }) {
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
                    <li className="nav-item">
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
