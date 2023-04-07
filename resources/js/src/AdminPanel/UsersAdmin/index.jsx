import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../../API";
import { useCookies } from "react-cookie";
import "../scss/style.scss";

function Books() {
    const form = React.createRef();
    const [cookies] = useCookies("");
    const [access, setAccess] = useState(true);
    const [listUsers, setListUsers] = useState([]);
    const user = {};

    const checkRole = () => {
        if (cookies["status"] !== undefined) {
            if (cookies["status"]["status"] === "admin") {
                return true;
            }
        }
        return false;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.role !== undefined) {
            sendUser(user);
        } else {
            alert("Чтобы изменить, выбирите элемент.");
        }
    };

    const sendUser = (user) => {
        API
            .put("/admin/users/update", user)
            .then((res) => {
                alert(res.data.message);
            });
    };

    function handleSelect(event) {
        user.token = cookies["token"]["token"];
        user.id = event.target.id;
        user.role = event.target.value;
    }

    useEffect(() => {
        API
            .post("/token", cookies["token"])
            .then((res) => {
                if (!res.data.access) {
                    setAccess(false);
                }
            });
        API
            .post("/admin/users", cookies["token"])
            .then((res) => setListUsers(res.data));
    }, [access]);

    if (!checkRole() || !access) {
        return <Navigate to={"/"} />;
    } else {
        return (
            <div className="main">
                <div className="blc-content">
                    <div className="blc-title">
                        <h2 className="title">Пользователи</h2>
                    </div>
                    <div className="admin-list">
                        {listUsers.map((el, index) => (
                            <form ref={form}>
                                <div className="user">
                                    <div className="name">
                                        <p><b>id: {el.id}</b> | {el.name}</p>
                                    </div>
                                    <div className="email">
                                        <p>{el.email}</p>
                                    </div>
                                    <div className="role">
                                        <select
                                            name="role"
                                            id={el.id}
                                            defaultValue={el.role}
                                            onChange={handleSelect}
                                        >
                                            <option selected>{el.role}</option>
                                            <option>
                                                {el.role === "admin"
                                                    ? "author"
                                                    : "admin"}
                                            </option>
                                        </select>
                                    </div>
                                    <div className="save">
                                        <button onClick={handleSubmit}>
                                            Изменить
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
