import React from "react";
import {Route, Routes, useParams} from 'react-router-dom'

import Home from './views/home';
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProdutos from "./views/produtos/consulta";


function Rotas(){

    const Wrapper = (props) => {
        const params = useParams();
        //console.log("Wrapper Params: "+params);
        return <CadastroProduto sku={params.sku} {...{...props, match: {params}} } />
      }

    return (

            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/cadastro-produtos" element={<Wrapper/>}>
                    <Route path=":sku"  element={<Wrapper/>} />
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

