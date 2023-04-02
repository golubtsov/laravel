import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="main">
            <div className="error">
                <h3>Данная страница не найдена.</h3>
                <h3>Убедитесь, что адресс страницы указан правильно.</h3>
            </div>
            <div className="error">
                <p>
                    Вернуться на <Link to="/">Главную</Link>
                </p>
            </div>
        </div>
    );
}

export default Error;
