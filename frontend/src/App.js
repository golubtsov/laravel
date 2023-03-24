import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then((data) => console.log(data.data))
  }, []);

  return (
    <div className="app">
      <h1>Главная</h1>
    </div>
  );
}

export default App;
