import React from "react";
import { Link } from "react-router-dom";
import "../LoginForm.scss";

function Sidnup() {
    return (
        <div className="blc-form">
            <form>
                <div className="title">
                    <h2>Зарегистрироваться</h2>
                </div>
                <div className="data">
                    <p><input type="text" placeholder="ФИО *" required /></p>
                </div>
                <div className="data">
                    <p><input type="text" placeholder="Email *" required /></p>
                </div>
                <div className="data">
                    <p><input type="password" placeholder="Пароль *" required /></p>
                </div>
                <div className="data">
                    <p><input type="password" placeholder="Повторите пароль *" required /></p>
                </div>
                <div className="blc-btn">
                    <div className="btn-submit">Отправить</div>
                </div>
            </form>
        </div>
    );
}

export default Sidnup;