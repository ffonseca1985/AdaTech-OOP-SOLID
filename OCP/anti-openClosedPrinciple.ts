// Aberto para extensão e fechado para modificacao
class ItemPedidoA  {

    idProduto: string;
    quantidade: number;
    preco: number;

    constructor(idProduto: string, quantidade: number, preco: number) {
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    getTotal() {
        return this.quantidade * this.preco;
    }
}

class PedidoA {

    id: number
    itens: Array<ItemPedidoA> = [];
    tipoFrete: string = ""

    constructor(id: number) {
        this.id = id;
    }

    addItem(idProduto: string, quantidade: number, preco: number) {

        this.itens.push(new ItemPedidoA(idProduto, quantidade, preco ));
    }

    getTotal() : number {

        if (!this.itens) return 0;

        return this.itens.map(x => x.getTotal()).reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    getTotalDesconto(): number {

        let total: number = this.getTotal();

        if (this.tipoFrete.toUpperCase() == "CORREIOS") {

            if (total > 1000) {
                return 0;
            }

            let cincoPorCento = 5/100;
            return total * cincoPorCento;
        }

        else if (this.tipoFrete.toUpperCase() == "UBER") {

            if (total > 100) {
                return 0;
            }

            return 20;
        }

        return 0;
    }

}
