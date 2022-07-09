import './assets/scss/app.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';

import Footer from './components/Footer';

function App() { // esta función maneja el ciclo de vida de la aplicación.
  return ( // lo que regresa no es HTML
    <div className="App">
      <BrowserRouter>
        <Header /> {/* header de navegación constante en todas las páginas */}
        <Routes>
          <Route path='' element={<Navigate to="/home" replace={true} />}/>    {/* la página default será Home, Navigate sirve para redireccionar */}
          <Route path='/home' element={<Home/>} />
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
