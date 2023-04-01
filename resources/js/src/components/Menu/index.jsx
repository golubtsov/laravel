import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Menu.scss";
import logo from "./images/logotip/logo.png";
import iconUser from "./images/icons-user.png"
import Navbar from "../Navbar";

function Menu() {

    const [cookies] = useCookies('token');
    const [activeMenu, setActiveMenu] = useState(false);
    const [linkCabinetDisplay, setLinkCabinetDisplay] = useState('none');
    const handleMenu = () => {
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    };

    const checkCookies = () => {
        if(cookies['token'] !== undefined) {
            setLinkCabinetDisplay('block');
        }
    }

    useEffect(() => {
        checkCookies();
    }, []);

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
                    <Link style={{display: linkCabinetDisplay}} className="user-cabinet" to="/cabinet">
                        <img src={iconUser} className="icon-user" />
                    </Link>
                </div>
            </div>
            <Navbar active={activeMenu} setActiveMenu={setActiveMenu} />
        </menu>
    );
}

export default Menu;
