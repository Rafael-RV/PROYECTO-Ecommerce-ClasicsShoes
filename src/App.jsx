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
        <Route path='/PROYECTO-ECOMMERCE-ClasicsShoes/*' element={<HomeRoute />} />
        <Route path='/PROYECTO-ECOMMERCE-ClasicsShoes/login' element={<Login />} />
        <Route path='/PROYECTO-ECOMMERCE-ClasicsShoes/signup' element={<SignUp />} />
        <Route path='/PROYECTO-ECOMMERCE-ClasicsShoes/catalogo' element={<CatalogoRoute />} />
        <Route path='/PROYECTO-ECOMMERCE-ClasicsShoes/detalles-producto/:productId' element={<Details />} />
        <Route path='/PROYECTO-ECOMMERCE-ClasicsShoes/miPerfil' element={<PerfilRoute />} />
  

      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
