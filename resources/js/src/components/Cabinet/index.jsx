import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

function Cabinet() {

    const [cookies, setCookie, removeCookie] = useCookies('token');
    if(cookies.token === undefined) {
        return <Navigate to="/" />
    };

    return (
        <>
            <h1>Кабинет</h1>
            <p>{cookies.token.token}</p>
        </>
    );
}

export default Cabinet;