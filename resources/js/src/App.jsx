import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Books from './components/Books';
import Genres from './components/Genres';
import Authors from './components/Authors';
import Error from './components/Error';
import Author from './components/Authors/Author';
import Book from './components/Books/Book';
import Genre from './components/Genres/Genre';
import LoginForm from './components/LoginForm';
import CreateBook from './components/Books/CreateBook';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/genres/:id' element={<Genre />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/authors/:id' element={<Author />} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
