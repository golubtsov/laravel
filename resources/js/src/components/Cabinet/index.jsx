import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

function Cabinet() {
    const [cookies, setCookie, removeCookie] = useCookies("token");

    useEffect(() => {}, []);

    return (
        <>
            <h1>Кабинет</h1>
            <h1>Кабинет</h1>
            <h1>Кабинет</h1>
            <h1>Кабинет</h1>
        </>
    );
}

export default Cabinet;
