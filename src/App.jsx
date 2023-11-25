// App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './routes/Login';
import { SignUp } from './routes/SignUp';
import { UserProvider } from './contextApi/UserContext';
import { NavbarComponent } from './components/Header/NavbarComponent';
import { PerfilRoute } from './routes/PerfilRoute';
import { Footer } from './components/Footer/Footer';
import { HomeRoute } from './routes/HomeRoute';
import { CatalogoRoute } from './routes/CatalogRoute';
import { Details } from './routes/DetailsRoute';


function App() {
  return (
    <UserProvider>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/*' element={<HomeRoute />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/catalogo' element={<CatalogoRoute />} />
        <Route path='/detalles-producto/:productId' element={<Details />} />
        <Route path='/miPerfil' element={<PerfilRoute />} />
        <Route path='/*' element={<HomeRoute />} />

      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
