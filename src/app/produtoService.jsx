const PRODUTOS = '_PRODUTOS';


export function ErroValidacao(erros){
    this.erros = erros;
}

export default class ProdutoService{

    validar = (produto) => {
        const erros = [];

        if(! produto.nome)
            erros.push("O campo NOME é obrigatório.");
        if(! produto.sku)
            erros.push("O campo SKU é obrigatório.");
        if(! produto.descricao)
            erros.push("O campo DESCRICAO é obrigatório.");
        if(! produto.preco || produto.preco <= 0)
            erros.push("O campo PREÇO deve ter um valor maior que zero(0).");
        if(! produto.fornecedor)
            erros.push("O campo FORNECEDOR é obrigatório.");

        if(erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    salvar = (produto) => {
        this.validar(produto);

        const produtos = this.obterProdutos();
        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }

    obterProdutos = () => {
        let produtos = localStorage.getItem(PRODUTOS);
        if(!produtos)
            produtos = [];
        else{
            produtos = JSON.parse(produtos);
        }
        return produtos;
        /*const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);*/
    }
}