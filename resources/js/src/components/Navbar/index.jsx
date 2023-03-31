import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar({active, setActiveMenu}) {
    return (
        <div className={active ? "navbar active" : "navbar"}>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="link-item" onClick={() => setActiveMenu(false)} to="/">Главная</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="link-item" onClick={() => setActiveMenu(false)} to="/books">Книги</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="link-item" onClick={() => setActiveMenu(false)} to="/genres">Жанры</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-item" onClick={() => setActiveMenu(false)} to="/authors">Авторы</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-item" onClick={() => setActiveMenu(false)} to="/login">Войти</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
