"use strict";
// Aberto para extensão e fechado para modificacao
class ItemPedidoA {
    constructor(idProduto, quantidade, preco) {
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    getTotal() {
        return this.quantidade * this.preco;
    }
}
class PedidoA {
    constructor(id) {
        this.itens = [];
        this.tipoFrete = "";
        this.id = id;
    }
    addItem(idProduto, quantidade, preco) {
        this.itens.push(new ItemPedidoA(idProduto, quantidade, preco));
    }
    getTotal() {
        if (!this.itens)
            return 0;
        return this.itens.map(x => x.getTotal()).reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    getTotalDesconto() {
        let total = this.getTotal();
        if (this.tipoFrete.toUpperCase() == "CORREIOS") {
            if (total > 1000) {
                return 0;
            }
            let cincoPorCento = 5 / 100;
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
//# sourceMappingURL=anti-openClosedPrinciple.js.map