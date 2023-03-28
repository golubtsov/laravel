import axios from "axios";
import React, { useState } from "react";

function CreateBook() {
    const form = React.createRef();
    const [createdBook, setCreatedBook] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let book = {
            author_id: form.current.elements.author_id.value,
            title: form.current.elements.title.value,
            description: form.current.elements.description.value,
        };
        axios
            .post("http://localhost:8000/api/books/create", book, {
                method: "POST",
            })
            .then((res) => setCreatedBook(res.data.message));
    };

    return (
        <>
            <h1>Добавить книгу</h1>
            <form ref={form}>
                <p>Автор</p>
                <p>
                    <input type="text" name="author_id" defaultValue={4} />
                </p>
                <p>Название</p>
                <p>
                    <input type="text" name="title" />
                </p>
                <p>Описание</p>
                <p>
                    <input
                        type="text"
                        name="description"
                        defaultValue={"description-1"}
                    />
                </p>
                <button onClick={handleSubmit}>Отправить</button>
            </form>
            <p>{createdBook}</p>
        </>
    );
}

export default CreateBook;
