import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";


import ListarUsuarios from "./Pages/ListarUsuarios/ListarUsuarios";
import ListarFuncionarios from "./Pages/ListarFuncionarios/ListarFuncionarios";
import CadastroFuncion from "./Pages/CadastroFuncion/CadastroFuncion";
import ListAtendimento from "./Pages/ListAtendimento/ListAtendimento";
import ConfigConta from "./Pages/ConfigConta/ConfigConta";
import ListAfazeres from "./Pages/ListAfazeres/ListAfazeres";
import Caixa from "./Pages/Caixa/Caixa";
import LoginAdm from "./Pages/LoginAdm/LoginAdm";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    
      <Fragment>
        <Routes>
          <Route path="/" element={<LoginAdm />} />
          <Route path="/listarusuarios" element={<ListarUsuarios />} />
          <Route path="/listarfuncionarios" element={<ListarFuncionarios />} />
          <Route path="/cadastrarfuncionarios" element={<CadastroFuncion />} />
          <Route path="/listatendimento" element={<ListAtendimento />} />
          <Route path="/configconta" element={<ConfigConta />} />
          <Route path="/listafazeres" element={<ListAfazeres />} />
          <Route path="/caixafinancas" element={<Caixa />} />
          
        </Routes>
      </Fragment>
   
  );
};
