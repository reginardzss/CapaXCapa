import './assets/scss/app.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './components/pages/Inicio/Inicio';
import Nosotros from './components/pages/Nosotros/Nosotros';
import Modelos from './components/pages/Modelos/Modelos';
import Contacto from './components/pages/Contacto';

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
