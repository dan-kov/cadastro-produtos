import React from "react";
import {Route, Routes} from 'react-router-dom'

import Home from './views/home';
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProdutos from "./views/produtos/consulta";


function Rotas(){
    return (

            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/cadastro-produtos" element={<CadastroProduto/>}>
                    <Route path=":sku"  element={<CadastroProduto/>} />
                </Route>
                <Route path="/consulta-produtos" element={<ConsultaProdutos/>} />
                
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>

    )
}


export default Rotas;

