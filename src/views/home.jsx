import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">
                Sistema de controle de produtos. Utilize a barra de navegação par acessar as páginas</p>
            <hr className="my-4" />
            <p></p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/cadastro-produtos" role="button">Cadastrar</Link>
            </p>
        </div>
    )
}


export default Home;