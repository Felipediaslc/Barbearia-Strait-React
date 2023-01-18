
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homee from './Pages/Homee/Homee';
import QuemSomos from './Pages/Quem-somos/Quem-somos'
import Servicos from './Pages/Servicos/Servicos'
import Galeria from './Pages/Galeria/Galeria'
import Cadastros from './Pages/Cadastros/Cadastros'
import Login from './Pages/Login/Login'
import Planos from './Pages/Planos/Planos'
import Agenda from './Pages/Agenda/Agenda'



export default () => {
    return (
    <Routes>
        <Route  path="/" element={ <Homee />  } />
        <Route  path="/home" element={ <Homee />  } />
        <Route  path="/agenda" element={ <Agenda />  } />
        <Route  path="/quemsomos" element={<QuemSomos />  } /> 
        <Route  path="/servicos" element={ <Servicos /> } />
        <Route  path="/galeria" element={ <Galeria /> } /> 
        <Route  path="/cadastros" element={ <Cadastros /> } />
        <Route  path="/login" element={ <Login /> } />
        <Route  path="/planos" element={ <Planos /> } />
      </Routes>
    );
}