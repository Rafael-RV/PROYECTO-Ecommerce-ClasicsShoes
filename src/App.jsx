// App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './routes/Login';
import { SignUp } from './routes/SignUp';
import { UserProvider } from './contextApi/UserContext';
import { NavbarComponent } from './components/Header/NavbarComponent';
import { PerfilRoute } from './routes/PerfilRoute';
import { Footer } from './components/Footer/Footer';
import { Home } from './routes/Home';
import { CatalogoRoute } from './routes/CatalogRoute';
import {  DetailsShoes } from './routes/DetailsShoes/DetailsShoes';


function App() {
  return (
    <UserProvider>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/catalogo' element={<CatalogoRoute />} />
        <Route path='/detalles-producto/:productId' element={<DetailsShoes />} />
        <Route path='/profile' element={<PerfilRoute />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
