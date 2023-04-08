import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "./images/logotip/logo.png";
import iconUser from "./images/icons-user.png";
import Navbar from "../Navbar";
import "./Menu.scss";

function Menu() {
    const linkCabinet = "/cabinet";
    const linkAdminPanel = "/admin";
    const [cookies] = useCookies("token");
    const [activeMenu, setActiveMenu] = useState(false);
    const [CabinetDisplay, setCabinetDisplay] = useState("flex");
    const [linkToPanel, setLinkToPanel] = useState(linkCabinet);

    const handleMenu = () => {
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
    };

    const checkCookies = () => {
        if (cookies["token"] === undefined) {
            setCabinetDisplay("none");
        }
    };

    const checkRole = () => {
        if (cookies["status"] !== undefined) {
            if (cookies["status"]["status"] === "admin") {
                setLinkToPanel(linkAdminPanel);
            }
        }
        return false;
    };

    useEffect(() => {
        checkCookies();
        checkRole();
    }, [CabinetDisplay]);

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
                <div style={{ display: CabinetDisplay }} className="blc-user">
                    <Link className="user-cabinet" to={linkToPanel}>
                        <img src={iconUser} className="icon-user" />
                    </Link>
                </div>
            </div>
            <Navbar active={activeMenu} setActiveMenu={setActiveMenu} />
        </menu>
    );
}

export default Menu;
