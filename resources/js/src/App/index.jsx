import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Cabinet from "../Cabinet";
import AddBook from "../Cabinet/AddBook";
import UpdateBook from "../Cabinet/UpdateBook";
import Profile from "../Cabinet/Profile";
import AdminPanel from "../AdminPanel";
import Books from "../AdminPanel/Books";
import GenresAdmin from "../AdminPanel/GenresAdmin";
import AuthorsAdmin from "../AdminPanel/AuthorsAdmin";
import Footer from "../Footer";

function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/books/:id" element={<Book />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/genres/:id" element={<Genre />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/authors/:id" element={<Author />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cabinet" element={<Cabinet />} />
                <Route path="/cabinet/profile" element={<Profile />} />
                <Route path="/cabinet/update" element={<UpdateBook />} />
                <Route path="/cabinet/add" element={<AddBook />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/admin/books" element={<Books />} />
                <Route path="/admin/genres" element={<GenresAdmin />} />
                <Route path="/admin/authors" element={<AuthorsAdmin />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
