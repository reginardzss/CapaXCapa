import './assets/scss/app.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Modelos from './pages/Modelos';
import Contacto from './pages/Contacto';

import Header from './components/Header';
import Footer from './components/Footer';

function App() { // esta función maneja el ciclo de vida de la aplicación.
  return ( // lo que regresa no es HTML
    <div className="App">
      <BrowserRouter>
        <Header /> {/* header de navegación constante en todas las páginas */}
        <Routes>
          <Route path='' element={<Navigate to="/inicio" replace={true} />}/>    {/* la página default será Home, Navigate sirve para redireccionar */}
          <Route path='/inicio' element={<Inicio/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/modelos' element={<Modelos/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
