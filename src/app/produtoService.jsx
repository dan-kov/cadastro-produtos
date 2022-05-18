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

    obterIndex = (sku) => {
        let index = null;
        this.obterProdutos().forEach( (produto, i) => {
            if(produto.sku === sku)
                index = i;
        });
        return index;
    }

    salvar = (produto) => {
        this.validar(produto);

        const index = this.obterIndex(produto.sku);
        const produtos = this.obterProdutos();
        
        if(index === null){
            produtos.push(produto);
        }
        else{
            produtos[index] = produto;
        }

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }

    deletar = (sku) => {
        const index = this.obterIndex(sku);
        if(index !== null){
            const produtos = this.obterProdutos();
            produtos.splice(index,1);
            localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
            return produtos;
        }
    }

    obterProdutos = () => {
        let strProdutos = localStorage.getItem(PRODUTOS);
        if(!strProdutos)
            return [];
        else{
            return JSON.parse(strProdutos);
        }
        /*const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);*/
    }
}