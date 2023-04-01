import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./Cabinet.scss";

function Cabinet() {
    const [cookies, removeCookie] = useCookies("token");

    const checkToken = () => {
        if (cookies["token"] !== undefined) {
            getTokenAccess(cookies["token"]);
        } else {
            return <Navigate to={"../"} />;
        }
    };

    const getTokenAccess = (token) => {
        axios
            .post("http://localhost:8000/api/token", token)
            .then((res) => getAccess(res.data));
    };

    const getAccess = (data) => {
        if (!data.access) {
            return <Navigate to={"../"} />;
        }
    };

    useEffect(() => {}, []);

    return (
        <>
            {checkToken()}
            <div className="blc-cabinet">
                <h1>Кабинет</h1>
            </div>
        </>
    );
}

export default Cabinet;
