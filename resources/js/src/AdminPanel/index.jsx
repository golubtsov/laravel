import React from 'react';
import { Link } from 'react-router-dom';

function AdminPanel() {
    return (
        <div className="main">
            <div className="blc-content">
                <div className="blc-title">
                    <h2 className="title">Административная панель</h2>
                </div>
                <div className="blc-genres">
                    <ul className="list">
                        <li>
                            <Link className="link">Книги</Link>
                        </li>
                        <li>
                            <Link className="link">Жанры</Link>
                        </li>
                        <li>
                            <Link className="link">Авторы</Link>
                        </li>
                        <li>
                            <Link className="link">Пользователи</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;