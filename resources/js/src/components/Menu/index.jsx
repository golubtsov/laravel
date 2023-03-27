import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Главная</Link>
                </li>
                <li className="nav-item">
                    <Link to="/books">Книги</Link>
                </li>
                <li className="nav-item">
                    <Link to="/genres">Жанры</Link>
                </li>
                <li className="nav-item">
                    <Link to="/authors">Авторы</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Menu;