import React from "react";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import axios from "axios";

function Profile() {

    const [cookies, setCookies] = useCookies("token");
    const [access, setAccess] = useState(true);
    const [authorId, setAuthorId] = useState(window.location.search.split("=")[1]); // параметр id из адресса страницы для получения информации о книге

    const checkCookies = () => {
        if (cookies["token"] === "undefined") {
            return true;
        }
    };

    const getDataUser = () => {
        axios.get(`http://127.0.0.1:8000/api/user/`)
    }

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                } else {
                    // setId(res.data.author.id);
                }
            });
    }, [access]);

    if (checkCookies() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Профиль</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
