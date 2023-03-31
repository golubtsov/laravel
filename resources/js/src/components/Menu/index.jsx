import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import logo from "./images/logotip/logo.png";
import iconUser from "./images/icons-user.png"
import Navbar from "../Navbar";

function Menu() {
    const [activeMenu, setActiveMenu] = useState(false);
    const handleMenu = () => {
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    };

    return (
        <menu>
            <div className="blc-logo">
                <div className="blc-btn-menu" onClick={handleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="blc-img-logo">
                    <Link className="link-logo" to="/">
                        <img src={logo} className="logo" />
                    </Link>
                </div>
                <div className="blc-user">
                    <Link className="user-cabinet" to="/cabinet">
                        <img src={iconUser} className="icon-user" />
                    </Link>
                </div>
            </div>
            <Navbar active={activeMenu} setActiveMenu={setActiveMenu} />
        </menu>
    );
}

export default Menu;
