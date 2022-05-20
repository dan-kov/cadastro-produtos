import React from "react";
import { Link } from "react-router-dom";

function ProdutoTable(props){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>SKU</th>
                    <th>Preço</th>
                    <th>Fornecedor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.produtos.map( (produto, index) => {
                        return (
                        <tr key={index}>
                            <th>{produto.nome}</th>
                            <th>{produto.sku}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>
                                {
                                    <Link to={`/cadastro-produtos/${produto.sku}`} key={produto.sku}>
                                        <button className="btn btn-primary">Editar</button> 
                                    </Link>
                                }
                                <button onClick={() => props.deletarAction(produto.sku)} className="btn btn-danger">Remover</button>
                            </th>
                        </tr>
                    )})
                }
            </tbody>
        </table>
    )
}

export default ProdutoTable;