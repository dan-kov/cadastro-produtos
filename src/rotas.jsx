import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './views/home';
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProdutos from "./views/produtos/consulta";


function Rotas(){
    return (

            <Routes>
                <Route exact path="/cadastro-produtos" element={<CadastroProduto/>} />
                <Route exact path="/consulta-produtos" element={<ConsultaProdutos/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>

    )
}


export default Rotas;