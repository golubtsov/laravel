import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Menu from "../Menu";
import Main from "../Main";
import Genres from "../Genres";
import Authors from "../Authors";
import Error from "../Error";
import Author from "../Authors/Author";
import Book from "../Books/Book";
import Genre from "../Genres/Genre";
import LoginForm from "../LoginForm";
import Signup from "../LoginForm/Signup";
import CreateBook from "../Books/CreateBook";
import Cabinet from "../Cabinet";
import AddBook from "../Cabinet/AddBook";
import Footer from "../Footer";

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/books/:id" element={<Book />} />
                <Route path="/books/create" element={<CreateBook />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/genres/:id" element={<Genre />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/authors/:id" element={<Author />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cabinet" element={<Cabinet />} />
                <Route path="/cabinet/add" element={<AddBook />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
