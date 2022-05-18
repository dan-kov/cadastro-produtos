import React from "react"
import ProdutoService from "../../app/produtoService";

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    mensagemSucesso : false,
    erros: [],
    atualizando : false
}

export default class CadastroProduto extends React.Component{

    state = estadoInicial;

    constructor(props){
        super(props);
        this.service = new ProdutoService();
       // this.state = { sku: props.sku };
       //console.log("PROPS: "+JSON.stringify(props));
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({ [nomeCampo] : valor}); 
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }
        try{
            this.service.salvar(produto);
            this.limpaCampos();
            this.setState({ mensagemSucesso: true });
        }catch(erro){
            const erros = erro.erros;
            this.setState({ erros: erros});
        }
    }

    limpaCampos = () => {
        this.setState(estadoInicial);
    }

    componentDidMount(){
        //let params = useParams();
        const sku = this.props.sku;
        //console.log('sku: '+sku);
        if(sku){
            const resultado = this.service.obterProdutos()
                    .filter( produto => produto.sku === sku)
            if(resultado.length === 1){
                const produtoEncontrado = resultado[0];
                this.setState({...produtoEncontrado, atualizando:true});

            }
        }
    }

    render(){
        console.log(this.props);
        let sku  = this.props.sku;
        console.log ("props.sku -> "+sku)
        return(
            <div className="card">
                <div className="card-header">
                    { this.state.atualizando ? 'Atualização' : 'Cadastro'}
                    &nbsp; de Produto
                </div>
                <div className="card-body">

                    { this.state.mensagemSucesso && 
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert">;</button>
                            <strong>Sucesso!</strong> O cadastro realizado com sucesso!
                        </div>
                    }

                    { this.state.erros.length > 0 && 
                        this.state.erros.map(msg => { 
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                            })
                    }


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: </label>
                                <input type="text" className="form-control" value={this.state.nome} name="nome" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: </label>
                                <input type="text" className="form-control" value={this.state.sku} name="sku" onChange={this.onChange} disabled={this.state.atualizando} />
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição: </label>
                                <textarea className="form-control" value={this.state.descricao} name="descricao" onChange={this.onChange} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: </label>
                                <input type="text" className="form-control" value={this.state.preco}  name="preco" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: </label>
                                <input type="text" className="form-control" value={this.state.fornecedor} name="fornecedor"  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-1">
                            <button className="btn btn-primary" onClick={this.onSubmit}>{this.state.atualizando ? 'Salvar' : 'Alterar'}</button>
                        </div>

                        <div className="col-md-1">
                            <button className="btn btn-secondary" onClick={this.limpaCampos}>Limpar</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}