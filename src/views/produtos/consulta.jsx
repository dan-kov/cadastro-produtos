import React from "react";
import { Link } from "react-router-dom";
import ProdutoService from "../../app/produtoService";
import Card from "../../components/card";
import ProdutoTable from "./produtoTable";


export default class ConsultaProdutos extends React.Component{

    state = {
        produtos : []
    }

    constructor(){
        super();
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({ produtos });

    }

    preparaEditar = (sku) => {
        console.log('sku para Editar: '+sku);
        //this.props.history.push(`/cadastro-produtos/${sku}`);
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku);
        this.setState({produtos});
    }


    render(){
        return(
            <Card header="Lista de Produtos">
                <ProdutoTable
                    produtos={this.state.produtos}
                    deletarAction={this.deletar} />
            </Card>
        )
    }
}

//export default withRouter(ConsultaProdutos);
